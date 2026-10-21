# John Bono
**Senior Software Engineer · Cybernetic Systems Architect · Human–Model Systems R&D**

[Executable laboratory](https://bonoj.github.io/) · [GitHub](https://github.com/bonoj) · [LinkedIn](https://linkedin.com/in/bonoj)  
(650) 207-7832 · johnlbono@gmail.com

## Engineering thesis

I build systems that turn ambiguous problems into executable, observable experiments. My foundation is senior production engineering—offline-first connected devices, financial software, mobile architecture, release operations, and distributed state—preceded by a decade of signals-intelligence analysis under uncertainty. My current research asks a practical question: **how much of the software-development barrier can be removed without surrendering human judgment, correctness, or accountability?**

I call the resulting practice **conjoining**: the human specifies intent, interrogates results, corrects errors, and chooses direction; the model operates tools and writes code; persistent repositories, tests, instrumentation, and deployment contracts make the work inspectable and recoverable. This is not a claim that a model is infallible or that prompting replaces engineering. It is an architecture for making engineering leverage available through a conversational interface.

## Explore the work

**[Executable laboratory — bonoj.github.io](https://bonoj.github.io/)**  
The public entrance to a growing collection of interactive worlds, scientific instruments, and model-mediated engineering experiments. Start here to experience the range of the work rather than just read about it.

**[Tiffinity Survivors — Evermore II](https://github.com/bonoj/Evermore-2)**  
An evolving real-time world of autonomous populations, resource gathering, competing dependencies, and emergent consequences. It is a concrete example of systems whose behavior must be observed and investigated rather than inferred solely from their design.

These are demonstrations of the *artifacts*. The engineering method, tests, version history, and failure evidence live in the linked repositories and development records.

## Demonstrated human–model engineering

**A working laboratory through a smartphone.** I conduct this work through a smartphone chat window rather than a desktop IDE or terminal. Connected models and tools inspect repositories, implement changes, execute checks, publish artifacts, and recover context. The relevant achievement is not the phone itself; it is that a narrow interface can direct a distributed, persistent engineering system while leaving the human free to reason about behavior.

**From encountered need to executable instrument.** A learner's chemistry problem became [Ion Garden](https://bonoj.github.io/jit/ion-garden/), an interactive ionic-charge-balancing exercise. A prospective differential-equations need became [Diff Eq](https://bonoj.github.io/jit/diff-eq/), with parameter-driven solutions and direction fields. An acid/base question became an interactive classification lab, later integrated with the chemistry tools into [ChemLab](https://bonoj.github.io/jit/chemlab/). These were not generic chat answers: they were implemented, tested software instruments shaped by human feedback. Their educational effectiveness has not been established.

**Verification beyond plausible output.** For Diff Eq, the model reported 4,984 mathematical checks, 21 interaction checks, and 18 simulated canvas scenarios, including numerical differentiation against governing equations; a subsequent pointer-drag revision reported 25 assertions. For chemistry, I required a separate audit of scientific assumptions rather than treating tests against an answer key as proof of correctness. These are recorded scripted/simulated checks, not a claim of independent scientific validation or physical-device acceptance. [Development evidence](https://github.com/bonoj/bonoj.github.io/commit/31973252cd350938bd30e728c2d3bb3f7c58481b).

**Failure is evidence, not embarrassment.** In an articulated-locomotion experiment, an inverse-kinematics visual follower was initially mistaken for progress toward physically connected legs. I challenged the topology: if the torso falls, the feet must be connected and move with it. The resulting finite-mass, force-coupled feet demonstrated connectivity, but a browser observation exposed a numerical energy explosion. That outcome was recorded as a failed stability test—not rebranded as walking. This is how I work: distinguish rendered plausibility, model assumptions, actual dynamics, and measured outcomes.

**Cold-boot continuity and deployment integrity.** The laboratory uses written entry contracts, working specifications, chronological evidence, and explicit source/build/runtime verification. In one recovery, a failed repository-write path was resolved by consulting the established contract and using Git's object-level operations; the human did not have to switch to a desktop or manually transport a file. In another, stale executable JavaScript motivated SHA-addressed deployment bundles and explicit checks that a phone is running the intended build. A commit, successful CI run, published asset, and executing browser are different facts.

**Composable executable worlds.** Alongside these instruments, I develop simulation substrates for terrain deformation, material transport, shallow-water dynamics, autonomous logistics, procedural construction, and articulated physical experiments. [Crucible](https://github.com/bonoj/Crucible) demonstrated 100,000 simulated beads at approximately 60 FPS under dry conditions. These are experimental systems with bounded observations, not assertions of general-purpose physics-engine completeness.

## Why this work matters for agent engineering

An agent that generates code is only one component. The hard problems are **task specification, environment state, tool authority, observability, evaluation, recovery, and provenance**. My laboratory confronts these at the level of actual repository mutations and running artifacts. I am especially interested in environments where a model must produce verifiable consequences, where failure cases are retained as useful training/evaluation evidence, and where human direction remains precise without requiring constant low-level intervention.

The most interesting question is not whether an agent can produce something impressive once. It is whether an unfamiliar task can be framed, executed, evaluated, corrected, and resumed reliably—and whether the system can tell the difference between *written*, *tested*, *deployed*, and *observed*.

## Professional experience

### Hermeticon — Conjoiner · Cybernetic Systems Architect
*2023–Present*

Hermeticon is an institution for the study and construction of possible worlds.

- **Architect and build executable worlds** spanning procedural environments, real-time simulation, spatial systems, interactive entities, and material behavior.
- **Translate unfamiliar physical and computational problems into working models**, using first-principles reasoning, instrumentation, deterministic experiments, and rapid iteration.
- **Build material systems with consequences:** deformable terrain, particle transport, accretion, shallow-water dynamics, conservation-aware interactions, and persistent environmental change.
- **Engineer simulations at scale**, including high-population particle systems, procedural construction, orbital environments, and autonomous logistics.
- **Design composable capabilities** that can be assembled into new experiments rather than rebuilt for every scene; preserve reproducibility, inspectability, and operational provenance.
- **Direct conjoined research and development:** frame hypotheses, challenge implementations, evaluate observed behavior, and steer human–model construction from concept to deployed artifact.

## Selected executable systems — evidence index

- **[Evermore II / Tiffinity Survivors](https://github.com/bonoj/Evermore-2):** Interacting autonomous populations, material dependencies, resource competition, and emergent world behavior; a substrate for investigating consequences that were not individually scripted.
- **[Abyss / Europa](https://github.com/bonoj/Abyss):** Shared runtime for independently mounted worlds; Europa explores synthetic ice stratigraphy, excavation, and material accounting. Scientific proxies are experimental, not physically calibrated measurements.
- **[Crucible](https://github.com/bonoj/Crucible):** Deformable terrain, particle transport, shallow-water simulation, and a measured 100,000-bead dry-condition performance experiment.
- **[SixCities](https://github.com/bonoj/SixCities):** Autonomous drones, reservoirs, launchers, and discrete material logistics in a closed-ring environment.
- **[OrbitalConstruction](https://github.com/bonoj/OrbitalConstruction):** Modular procedural orbital geometry and coherent interior/exterior construction.
- **[VerticalAccretion](https://github.com/bonoj/VerticalAccretion):** Exploration, construction, route memory, and deterministic replay.
- **[Foundry](https://github.com/bonoj/Foundry):** Terrain deformation and interacting simulation entities in a strategy substrate.
- **[Hermeticon](https://github.com/bonoj/Hermeticon):** Composable world-building and experimental research environment.
- **[Ledger](https://github.com/bonoj/Ledger):** Written provenance and continuity for human–model investigation; supporting engineering evidence rather than an executable world.

### Xeal — Founding Software Engineer, Android
*Los Angeles, CA | Oct 2022–2023*

- Architected offline-first software for connected EV charging infrastructure, handling unreliable connectivity and distributed device state.
- Engineered mobile coordination for firmware updates and charging-station telemetry.

### Affirm — Senior Software Engineer, Android
*San Francisco, CA | Nov 2020–Feb 2022*

- Defined architecture and implementation strategy for production features through technical specifications and RFCs.
- Led mobile release execution, production monitoring, incident triage, and hotfix delivery for a large-scale financial platform.

### DoorDash — Senior Software Engineer, Android
*San Francisco, CA | Sep 2019–Nov 2020*

- Integrated navigation systems into a modular application architecture.
- Led migration from MVP/RxJava to MVVM/Kotlin Coroutines; built internal tooling to improve testing and QA workflows.

### Solera / R3PI — Full Stack Engineer
*Dallas, TX | Aug 2017–Sep 2019*

- Built fleet-management systems combining routing, telematics, inspections, monitoring, and operational workflows.
- Integrated Bluetooth/BLE hardware with mobile applications and developed REST services for logistics systems.

### U.S. Navy / National Security Agency — Signals Intelligence
*Dec 2003–Jun 2014*

- Conducted complex network and geospatial analysis, synthesizing incomplete, changing evidence into actionable analytical understanding.
- Applied pattern recognition, spatial reasoning, and rigorous hypothesis evaluation to dynamic, time-sensitive problems.
- Worked across analytical and technical disciplines, developing deep experience in systems-level reasoning under uncertainty.

## Domain

**Creative direction & world architecture:** Experimental world-building · Systems design · Creative technology · Interactive environments · Simulation architecture · Procedural generation · Generative systems · Spatial reasoning · Emergent behavior · Rapid prototyping · Research and development · Human–model collaboration

**Physics, mathematics & simulation:** Computational geometry · 3D transformations · Kinematics · Orbital mechanics · Ballistic trajectories · Collision systems · Particle simulation · Shallow-water dynamics · Fluid transport · Material conservation · Deformable height fields · Terrain generation · Accretion · Deterministic simulation · Numerical modeling · Performance optimization

**Agents, worlds & interactions:** Autonomous agents · State machines · Entity-component systems (ECS) · Agent navigation · Route memory · Logistics systems · Procedural structures · Interactive tools · Persistent world state · Event-driven behavior · Real-time visualization · Camera and interaction systems

**Graphics & interactive development:** Three.js · WebGL · Unity · C# · JavaScript · 3D scene graphs · Mesh generation · Materials and lighting · Shader effects · Raycasting · Mobile-first interactive interfaces · Real-time rendering · Frame-time and simulation profiling

**Architecture & research practice:** Systems architecture · First-principles modeling · Hypothesis-driven experimentation · Instrumentation · Observability · Deterministic seeds and replay · Reproducible experiments · Evidence and provenance · Modular and composable capabilities · API design · Technical specifications · RFCs · CI and deployment · Debugging and production diagnostics

**Software engineering:** Kotlin · Java · C# · JavaScript · C++ · Python · SQL · Android · Jetpack Compose · MVVM · Kotlin Coroutines · RxJava · Hilt/Dagger · Room · Retrofit · REST APIs · Backend services · Distributed clients · Offline-first systems · Synchronization · Persistent storage · Bluetooth/BLE · NFC · Firmware-update coordination · Device telemetry · Automated testing · Release engineering

**Platforms & infrastructure:** Git · GitHub · GitHub Pages · Unity · Android · AWS · Google Cloud Platform · Firebase · Docker · CI pipelines · Web deployment

**Analytical disciplines:** Signals intelligence · Geospatial analysis · Network analysis · Pattern recognition · Evidence synthesis · Time-sensitive analysis · Systems thinking · Technical investigation · Decision-making under uncertainty
