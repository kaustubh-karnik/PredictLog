export function setupCommandOverviewEffects(root: HTMLElement) {
  const rows = root.querySelectorAll('tbody tr');
  const handlers: { row: Element; enter: () => void; leave: () => void }[] = [];

  rows.forEach((row) => {
    const enter = () => row.classList.add('bg-surface-container-high');
    const leave = () => row.classList.remove('bg-surface-container-high');
    row.addEventListener('mouseenter', enter);
    row.addEventListener('mouseleave', leave);
    handlers.push({ row, enter, leave });
  });

  return () => {
    handlers.forEach(({ row, enter, leave }) => {
      row.removeEventListener('mouseenter', enter);
      row.removeEventListener('mouseleave', leave);
    });
  };
}

export function setupForwardSupplyMapEffects(root: HTMLElement) {
  const drawer = root.querySelector('#node-detail-drawer') as HTMLElement | null;
  const btnCloseDrawer = root.querySelector('#btn-close-drawer');
  const btnToggleDrawer = root.querySelector('#btn-toggle-drawer');
  const lehMarker = root.querySelector('#node-leh-marker');
  const layerPanel = root.querySelector('#layer-control-panel') as HTMLElement | null;
  const btnCollapseLayers = root.querySelector('#btn-collapse-layers');
  const timelineSlider = root.querySelector('#timeline-slider') as HTMLInputElement | null;
  const btnScrubPlay = root.querySelector('#btn-scrub-play');
  const btnRecenter = root.querySelector('#btn-recenter');

  let drawerOpen = true;
  let layersOpen = true;
  let isPlaying = false;
  let playInterval: ReturnType<typeof setInterval> | null = null;

  const setDrawerState = (open: boolean) => {
    drawerOpen = open;
    if (!drawer) return;
    drawer.style.transform = drawerOpen ? 'translateX(0)' : 'translateX(100%)';
  };

  const onCloseDrawer = () => setDrawerState(false);
  const onToggleDrawer = () => setDrawerState(!drawerOpen);
  const onLehClick = () => setDrawerState(true);

  btnCloseDrawer?.addEventListener('click', onCloseDrawer);
  btnToggleDrawer?.addEventListener('click', onToggleDrawer);
  lehMarker?.addEventListener('click', onLehClick);

  const onCollapseLayers = () => {
    layersOpen = !layersOpen;
    if (!layerPanel || !btnCollapseLayers) return;
    if (layersOpen) {
      layerPanel.style.transform = 'translateX(0)';
      btnCollapseLayers.innerHTML =
        '<span class="material-symbols-outlined text-[16px]">chevron_left</span>';
    } else {
      layerPanel.style.transform = 'translateX(calc(-100% + 24px))';
      btnCollapseLayers.innerHTML =
        '<span class="material-symbols-outlined text-[16px]">chevron_right</span>';
    }
  };

  btnCollapseLayers?.addEventListener('click', onCollapseLayers);

  const onScrubPlay = () => {
    if (!btnScrubPlay || !timelineSlider) return;
    isPlaying = !isPlaying;
    if (isPlaying) {
      btnScrubPlay.innerHTML =
        '<span class="material-symbols-outlined text-[16px]">pause</span>';
      playInterval = setInterval(() => {
        let val = parseInt(timelineSlider.value, 10);
        val = val >= 72 ? 0 : val + 1;
        timelineSlider.value = String(val);
      }, 250);
    } else {
      btnScrubPlay.innerHTML =
        '<span class="material-symbols-outlined text-[16px]">play_arrow</span>';
      if (playInterval) clearInterval(playInterval);
      playInterval = null;
    }
  };

  btnScrubPlay?.addEventListener('click', onScrubPlay);

  const onRecenter = () => {
    if (!btnRecenter) return;
    btnRecenter.classList.add('bg-primary-container');
    window.setTimeout(() => btnRecenter.classList.remove('bg-primary-container'), 300);
  };

  btnRecenter?.addEventListener('click', onRecenter);

  return () => {
    btnCloseDrawer?.removeEventListener('click', onCloseDrawer);
    btnToggleDrawer?.removeEventListener('click', onToggleDrawer);
    lehMarker?.removeEventListener('click', onLehClick);
    btnCollapseLayers?.removeEventListener('click', onCollapseLayers);
    btnScrubPlay?.removeEventListener('click', onScrubPlay);
    btnRecenter?.removeEventListener('click', onRecenter);
    if (playInterval) clearInterval(playInterval);
  };
}
