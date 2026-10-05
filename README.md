# PredictLog

## Predictive Logistics for Assured Forward Support

PredictLog is an AI-assisted, offline-first logistics decision-support platform designed for forward formations operating in difficult, dispersed, and connectivity-constrained environments.

It combines:

- Probabilistic demand forecasting
- Early stock-out detection
- Inventory and asset visibility
- GIS-enabled route planning
- Convoy monitoring
- Course-of-action generation
- Disruption simulation
- Offline and store-and-forward operation
- Explainable decision support

PredictLog helps logistics teams identify supply risks before they become emergencies and provides ranked, feasible options for responding to them.

> **PredictLog helps logistics teams see the shortage before it happens, understand why it is likely, and choose a feasible response before time runs out.**

---

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Core Workflow](#core-workflow)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Forecasting Approach](#forecasting-approach)
- [Route Planning](#route-planning)
- [Offline-First Design](#offline-first-design)
- [User Roles](#user-roles)
- [Technology Stack](#technology-stack)
- [Prototype Screens](#prototype-screens)
- [Sample Scenario](#sample-scenario)
- [Evaluation Metrics](#evaluation-metrics)
- [Implementation Roadmap](#implementation-roadmap)
- [Security Principles](#security-principles)
- [Project Principles](#project-principles)
- [Future Scope](#future-scope)
- [Disclaimer](#disclaimer)

---

## Overview

Military logistics in forward areas is affected by rapidly changing demand, challenging terrain, weather uncertainty, route disruption, limited transport capacity, incomplete inventory records, and unreliable communications.

Conventional workflows often depend on periodic reports and manual coordination. This creates a delay between the time a shortage begins to develop and the time it is formally reported.

PredictLog addresses this problem through a unified decision-support workflow:

```text
Predict → Detect → Recommend → Stress-Test → Track → Learn
```

The platform is designed to support commanders, logistics planners, depot managers, transport officers, and higher headquarters.

PredictLog does not replace human decision-makers or existing logistics systems. It provides earlier warnings, clearer information, and ranked options so authorized personnel can make better decisions faster.

---

## Problem Statement

Forward formations may face the following logistics challenges:

- Demand changes with operational tempo and mission requirements.
- Consumption patterns vary across formations and supply categories.
- Terrain and weather affect travel time and route availability.
- Inventory information is distributed across multiple systems.
- Book inventory may not match physical inventory.
- Convoy locations and arrival times may be delayed.
- Communication may be intermittent or unavailable.
- Routes may become blocked or unsuitable.
- Emergency resupply increases cost, risk, and exposure.
- Planners may need to make decisions with incomplete information.

By the time a formation submits an emergency resupply request, the available response window may already be too small.

The central problem addressed by PredictLog is:

> How can logistics planners identify future supply shortfalls early and select a feasible, risk-aware resupply plan despite uncertain demand, difficult terrain, disrupted routes, and degraded connectivity?

---

## Proposed Solution

PredictLog integrates multiple logistics data streams into a common operational picture.

### Input data

The platform can consume:

- Historical consumption
- Formation strength
- Mission and activity calendars
- Operational tempo
- Current inventory
- Confirmed inbound supplies
- Depot issue records
- RFID and IoT scans
- Convoy schedules
- Vehicle availability
- Terrain data
- Road-network data
- Weather conditions
- Route closure information
- Manual reports
- Connectivity status

### Output

PredictLog produces:

- Probabilistic demand forecasts
- Projected stock-out times
- Shortfall alerts
- Forecast explanations
- Ranked resupply options
- Route and load recommendations
- Disruption-test results
- Convoy tracking information
- Inventory reconciliation insights
- Data freshness and confidence indicators

---

## Core Workflow

```text
1. Ingest
   Collect demand, inventory, transport, terrain, weather, and connectivity data.

2. Align
   Standardize timestamps, locations, supply categories, and source formats.

3. Forecast
   Estimate future demand using statistical and machine-learning models.

4. Detect
   Compare projected demand with available stock and feasible resupply time.

5. Recommend
   Generate ranked courses of action for routing, loading, and resource allocation.

6. Stress-test
   Simulate route closures, delays, vehicle loss, weather changes, and communication outages.

7. Approve
   Allow an authorized user to review and approve a recommended option.

8. Track
   Monitor convoy progress, delivery status, inventory updates, and data freshness.

9. Learn
   Measure forecast errors, data quality, and operational outcomes for controlled improvement.
```

---

## Key Features

### 1. Probabilistic Demand Forecasting

PredictLog provides a demand range rather than a single estimated value.

The system generates:

- `P10`: Lower-demand estimate
- `P50`: Median-demand estimate
- `P90`: Higher-demand estimate

This helps planners understand both expected consumption and potential demand surges.

Forecast inputs may include:

- Historical consumption
- Formation strength
- Activity tempo
- Mission calendar
- Weather
- Terrain
- Inventory position
- Confirmed inbound supply
- Previous demand surges
- Reporting delays
- Data-quality indicators

---

### 2. Shortfall Early Warning

The shortfall engine identifies potential stock-outs before they occur.

A simplified alert rule is:

```text
Create an alert when high-percentile demand before feasible resupply
exceeds available inventory and confirmed inbound supply.
```

Each alert can display:

- Formation or node
- Supply category
- Current stock
- P10, P50, and P90 demand
- Earliest feasible resupply time
- Projected stock-out time
- Resupply gap
- Forecast confidence
- Data freshness
- Main forecast drivers
- Recommended next action

---

### 3. Inventory Visibility

PredictLog provides a unified view of inventory across:

- Regional depots
- Transit nodes
- Forward nodes
- Convoys
- Temporary storage points

The system can compare:

- Book quantity
- Physically scanned quantity
- Confirmed inbound quantity
- Allocated quantity
- Quantity awaiting reconciliation

Potential data sources include:

- RFID readers
- IoT sensors
- Depot records
- Manual updates
- Convoy dispatch records
- Local node systems

Each record can include:

- Source
- Timestamp
- Last physical scan
- Synchronization state
- Verification state
- Quantity variance
- Data confidence

---

### 4. GIS-Enabled Logistics Planning

The map and planning layer combines:

- Road networks
- Terrain
- Weather
- Route closures
- Node locations
- Convoy positions
- Supply risk
- Travel-time uncertainty
- Vehicle capacity

PredictLog can generate multiple ranked courses of action instead of one opaque recommendation.

Example options:

| Option | Priority |
|---|---|
| Fastest delivery | Minimize arrival time |
| Lowest exposure | Reduce route or operational risk |
| Lowest resource use | Reduce vehicles or resource consumption |
| Highest deadline reliability | Maximize probability of arriving before stock-out |
| Balanced option | Trade off time, risk, and resources |

Closed route segments are treated as hard constraints. Weather, terrain, and uncertain travel time can be represented as penalties or risk factors.

---

### 5. Course-of-Action Planning

The COA Planner compares resupply