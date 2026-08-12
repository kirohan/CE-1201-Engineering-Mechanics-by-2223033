window.CE1201_DATA = {
  meta: {
    code: 'CE 1201',
    title: 'Engineering Mechanics',
    department: 'Department of Building Engineering & Construction Management',
    university: 'Khulna University of Engineering & Technology (KUET)',
    credit: '3.0',
    marks: '210',
    duration: '3 hours',
    creditLine: 'Made by K.I.Rohan'
  },
  examModel: {
    rule: 'A regular question paper contains four full questions in each part. Each full question is treated as one “set”.',
    exception: '2020 is treated as an exception to the normal set pattern, following the instructor note supplied by the course owner.',
    note: 'Historical papers sometimes place a topic under a different printed Section A/B label. This website follows the current set-wise taxonomy supplied with the notes, so study order stays consistent.'
  },
  sourceCoverage: [
    'Full handwritten class notes: Shuvo Dip Datta Sir, Kabbo Sir, Hamid Sir + Shuvo Dip Sir, Arif Sir',
    'Set-wise Section A notes: Centroid, Area MOI, Product of Inertia, Mass MOI, Pappus-Guldinus, Dynamics, Work-Energy, Impulse-Momentum',
    'Set-wise Section B notes: FBD/Equilibrium, SFBM, Pulley, Truss, Plane Motion, Friction, Flexible Cord',
    'Regular final papers: 2015-2019, 2021, 2023, 2024 and 2025 supplied in the uploaded question banks',
    'Backlog paper: 2023',
    'Reference solution manual: Analytic Mechanics by Faires & Chambers solution manual'
  ],
  partA: [
    {
      id: 'a1', set: 'Set A1', title: 'Centroid, Center of Gravity & Center of Mass', priority: 'Must Do', icon: '◎',
      summary: 'The geometric center family: centroid of line/area/volume, C.G., C.M., symmetry, standard shapes and composite areas.',
      source: '1 - Centroid - by 2223007; Shuvo Dip Datta lecture slides; Hamid + Shuvodip class note',
      years: ['2015','2016','2017','2018','2019','2020*','2021','2022 note-tag','2023','2024','2025'],
      topics: [
        {
          title: 'Centroid — মূল ধারণা',
          body: `<p><b>Centroid</b> হলো একটি uniform-density geometrical shape-এর geometric center. Area problem-এ এটি এমন একটি point যেখানে পুরো area-কে concentrated ধরে first moment সমান রাখা যায়.</p>
          <div class="math-block">x̄ = <span class="frac"><span>∫ x dA</span><span>∫ dA</span></span>, &nbsp; ȳ = <span class="frac"><span>∫ y dA</span><span>∫ dA</span></span></div>
          <p class="bn"><b>মনে রাখুন:</b> Centroid = geometry-এর কেন্দ্র; weight দরকার নেই। Composite area হলে “Area × distance” table বানানো সবচেয়ে নিরাপদ।</p>`,
          qb: 'Definition is note-tagged for 2015–2022 and the topic continues in 2023–2025 papers.'
        },
        {
          title: 'Center of Gravity vs Center of Mass',
          body: `<p><b>Center of Gravity (C.G.)</b> হলো যে point দিয়ে body-এর resultant gravitational weight কাজ করে। <b>Center of Mass (C.M.)</b> mass distribution-এর unique point.</p>
          <div class="math-block">x̄ = <span class="frac"><span>∫ x dm</span><span>m</span></span>, &nbsp; ȳ = <span class="frac"><span>∫ y dm</span><span>m</span></span>, &nbsp; z̄ = <span class="frac"><span>∫ z dm</span><span>m</span></span></div>
          <p>Uniform and parallel gravitational field-এ <b>C.G. = C.M.</b>. Uniform density body-তে mass density cancel করলে C.M. geometrical centroid-এর সাথে coincide করে.</p>`,
          qb: '2023 asks distinction/applications; 2024/2025 ask conditions for coincidence.'
        },
        {
          title: 'Principle of Symmetry',
          body: `<p>If a plane figure has a line of symmetry, its centroid lies on that line. If it has two intersecting symmetry axes, their intersection gives the centroid.</p>
          <p class="bn"><b>Shortcut:</b> Symmetry দেখলেই একটি coordinate সরাসরি fix করুন; unnecessary integration করবেন না।</p>`,
          qb: 'Axis of symmetry is note-tagged in 2017, 2018 and 2020.'
        },
        {
          title: 'Composite Area Method',
          body: `<ol><li>Shape-কে rectangle/triangle/circle/sector ইত্যাদিতে ভাগ করুন.</li><li>Reference X-Y axes fix করুন.</li><li>প্রতি অংশের A, x, y বের করুন.</li><li>Hole/cut-out-এর area negative নিন.</li><li>x̄ = ΣAx/ΣA এবং ȳ = ΣAy/ΣA.</li></ol>
          <p class="bn"><b>Exam table:</b> Part | A | x | Ax | y | Ay. এই table ভুল sign কমায়।</p>`,
          qb: 'Composite centroid numerical is one of the most persistent patterns across regular papers.'
        },
        {
          title: 'Triangle Centroid Derivation',
          body: `<p>Base <i>b</i>, height <i>h</i>. A horizontal strip at height y has width b(h−y)/h.</p>
          <div class="math-block">dA = <span class="frac"><span>b(h-y)</span><span>h</span></span>dy</div>
          <p>Then ȳ = ∫y dA/A = h/3 from the base. Similarly, for a right triangle with legs on axes, x̄=b/3 and ȳ=h/3.</p>`,
          qb: 'Triangle derivation is note-tagged in 2016, 2018 and 2021.'
        },
        {
          title: 'Arc and Sector of a Circle',
          body: `<p>For a circular <b>arc</b> of radius r subtending 2β:</p><div class="math-block">x̄ = <span class="frac"><span>r sin β</span><span>β</span></span></div>
          <p>For a circular <b>sector</b> of radius r subtending 2β:</p><div class="math-block">x̄ = <span class="frac"><span>2r sin β</span><span>3β</span></span></div>
          <p>β must be in radians for these formulas.</p>`,
          qb: 'Sector centroid appears repeatedly, including 2023 and 2025.'
        },
        {
          title: 'Parabolic Boundary — high-value advanced problem',
          body: `<p>For the first-quadrant area bounded by y²=4x and x²=4y, intersections are (0,0) and (4,4). By symmetry x̄=ȳ.</p>
          <div class="math-block">A = ∫₀⁴(2√y − y²/4)dy = 16/3</div>
          <div class="math-block">x̄ = ȳ = 9/5 = 1.8 in</div>
          <p class="bn">এই problem-এ symmetry আগে ধরলে calculation অর্ধেক হয়ে যায়।</p>`,
          qb: 'Prepared centroid note labels this as a 2022 question; 2024 asks the same family of parabolic-centroid problem.'
        }
      ],
      memory: ['Centroid → Geometry', 'C.G. → Weight', 'C.M. → Mass', 'Hole = negative area', 'Symmetry first, integration second']
    },
    {
      id: 'a2', set: 'Set A2', title: 'Moment of Inertia of Area', priority: 'Must Do', icon: 'I',
      summary: 'Rectangular and polar second moment of area, radius of gyration, standard-shape formulas and parallel-axis theorem.',
      source: '03 - Slide - Moment of Inertia of Area; 201-SD~1; Section A class notes',
      years: ['2015','2016','2017','2018','2019','2020*','2021','2023','2024','2025'],
      topics: [
        {title:'Second Moment of Area', body:`<p>Area moment of inertia describes how an area is distributed about an axis and directly influences beam stress/deflection calculations.</p><div class="math-block">I<sub>x</sub> = ∫ y<sup>2</sup>dA, &nbsp; I<sub>y</sub> = ∫ x<sup>2</sup>dA</div><p>Unit is length<sup>4</sup>: mm<sup>4</sup>, in<sup>4</sup>, m<sup>4</sup>.</p>`, qb:'Definition and applications recur throughout the question bank.'},
        {title:'Polar Moment of Inertia', body:`<p>For z-axis perpendicular to the area:</p><div class="math-block">J<sub>O</sub> = ∫ r<sup>2</sup>dA = I<sub>x</sub> + I<sub>y</sub></div><p class="bn">কারণ r²=x²+y²; তাই perpendicular-axis theorem খুব সহজে prove করা যায়।</p>`, qb:'J = Ix + Iy proof is a standard theory question.'},
        {title:'Radius of Gyration', body:`<div class="math-block">k<sub>x</sub> = √(I<sub>x</sub>/A), &nbsp; k<sub>y</sub> = √(I<sub>y</sub>/A), &nbsp; k<sub>O</sub>=√(J/A)</div><p>It is the distance at which the whole area could be imagined concentrated to give the same MOI.</p>`, qb:'Often paired with polar MOI numericals.'},
        {title:'Parallel-Axis / Transfer Theorem', body:`<div class="math-block">I = Ī + Ad<sup>2</sup></div><p>Ī is MOI about a parallel centroidal axis, d is the perpendicular distance between axes.</p><p class="bn"><b>Rule:</b> আগে centroid বের করুন, তারপর d. Hole হলে both area contribution and its transferred MOI are subtracted.</p>`, qb:'A core theorem and calculation tool in nearly every composite MOI problem.'},
        {title:'Standard Formula — Rectangle & Triangle', body:`<div class="formula-grid"><div><b>Rectangle</b><br>I<sub>x,G</sub>=bh<sup>3</sup>/12<br>I<sub>y,G</sub>=hb<sup>3</sup>/12</div><div><b>Triangle</b><br>I<sub>x,base</sub>=bh<sup>3</sup>/12<br>I<sub>x,G</sub>=bh<sup>3</sup>/36</div></div>`, qb:'Triangle derivation and composite-section use are recurrent.'},
        {title:'Solved L-Section Pattern', body:`<p>For a 2×8 in vertical rectangle plus a 7×2 in top rectangle:</p><div class="math-block">x̄ = 2.167 in, &nbsp; ȳ = 6.333 in</div><div class="math-block">I<sub>x,G</sub> = 276.67 in<sup>4</sup>, &nbsp; I<sub>y,G</sub> = 109.17 in<sup>4</sup></div><p class="bn">এই pattern-এ সবচেয়ে common ভুল: top rectangle-এর y-coordinate 8+1=9 in না নেওয়া।</p>`, qb:'Matches the composite-transfer workflow used in the supplied class note.'}
      ],
      memory: ['Area MOI = distance² × dA', 'J = Ix + Iy', 'Parallel axis = centroid value + Ad²', 'Radius of gyration always has length unit']
    },
    {
      id:'a3', set:'Set A3', title:'Product of Inertia, Mass MOI & Pappus–Guldinus', priority:'Very High', icon:'Σ',
      summary:'The advanced inertia set: product of inertia/principal values, inertia of masses and surface/volume of revolution.',
      source:'3.1 Product of Inertia; 3.2 Moment of Inertia of Masses; Pappus-Guldinus slides',
      years:['2017','2018','2019','2020*','2021','2022 note-tag','2023','2024','2025'],
      topics:[
        {title:'Product of Inertia', body:`<div class="math-block">P<sub>xy</sub> = ∫xy dA</div><p>Unlike Ix or Iy, Pxy may be positive, negative or zero. If x or y is an axis of symmetry, Pxy=0.</p><div class="math-block">P<sub>xy</sub> = P̄<sub>xy</sub> + A d<sub>x</sub>d<sub>y</sub></div>`, qb:'The supplied note tags a Z-section product-inertia problem for 2017–2022.'},
        {title:'Principal / Maximum-Minimum MOI', body:`<div class="math-block">I<sub>avg</sub>=(I<sub>x</sub>+I<sub>y</sub>)/2</div><div class="math-block">R=√{[(I<sub>x</sub>−I<sub>y</sub>)/2]<sup>2</sup>+P<sub>xy</sub><sup>2</sup>}</div><div class="math-block">I<sub>max,min</sub>=I<sub>avg</sub>±R</div><p>k=√(I/A).</p>`, qb:'2023 explicitly asks maximum/minimum centroidal MOI for an angle section.'},
        {title:'Verified Z-Section Example', body:`<p>For the 8×5×1 in Z-section used in the prepared note:</p><div class="math-block">P<sub>xy</sub>=70 in<sup>4</sup>, I<sub>x</sub>=141.34 in<sup>4</sup>, I<sub>y</sub>=61.33 in<sup>4</sup></div><div class="math-block">I<sub>max</sub>=181.96 in<sup>4</sup>, I<sub>min</sub>=20.71 in<sup>4</sup></div><div class="math-block">k<sub>max</sub>=3.372 in, k<sub>min</sub>≈1.138 in</div>`, qb:'A very high-yield repeated pattern.'},
        {title:'Moment of Inertia of Masses', body:`<div class="math-block">I = ∫r<sup>2</sup>dm, &nbsp; I = Ī + md<sup>2</sup></div><p>US customary problems require mass in <b>slug</b>: m=W/g.</p><p class="bn">Area MOI-তে A; Mass MOI-তে m — parallel-axis formula-র এই পার্থক্য ভুলবেন না।</p>`, qb:'Mass inertia is used in disk/shaft, frustum, mallet and impact/dynamics problems.'},
        {title:'Standard Mass MOI', body:`<div class="formula-grid"><div><b>Slender rod, center</b><br>I=mL²/12</div><div><b>Solid sphere</b><br>I=2mr²/5</div><div><b>Solid cylinder, axis</b><br>I=mr²/2</div><div><b>Solid disk</b><br>I=mr²/2</div></div>`, qb:'2024 asks cylinder; 2025 asks sphere; 2023 includes disk/shaft.'},
        {title:'Mallet Example', body:`<p>Supplied solution: 3 ft handle weighs 3.14 lb; cylindrical head weighs 16.16 lb. Using transfer theorem:</p><div class="math-block">I<sub>y,total</sub> ≈ 4.00 slug·ft<sup>2</sup></div><div class="math-block">k<sub>y</sub> = √(I/m) ≈ 2.59 ft</div>`, qb:'The same mallet family appears in 2025.'},
        {title:'Pappus–Guldinus Theorem I — Surface', body:`<p>Surface generated by revolving a plane curve of length L about an external axis:</p><div class="math-block">S = 2πȳL</div><p>ȳ is the perpendicular distance of the curve centroid from the axis of revolution.</p>`, qb:'Cone-paint and surface-of-revolution questions recur.'},
        {title:'Pappus–Guldinus Theorem II — Volume', body:`<p>Volume generated by revolving a plane area A:</p><div class="math-block">V = 2πȳA</div><p>For a torus formed by rotating a circle radius a whose center is b from the axis: V=2π²a²b.</p>`, qb:'2018/2023/2025 use pulley rim/solid of revolution variants.'}
      ],
      memory:['Product inertia can be ±', 'Symmetry axis ⇒ Pxy=0', 'Mass MOI uses m, not A', 'Pappus: generating measure × centroid travel distance']
    },
    {
      id:'a4', set:'Set A4', title:'Dynamics, Work–Energy & Impulse–Momentum', priority:'Must Do', icon:'→',
      summary:'Classical dynamics using force–mass acceleration, work–energy, impulse–momentum and projectile/plane motion.',
      source:'4.1 Dynamics; 4.2 Impulse Momentum; 4.3 Work, Power and Energy; Shuvo Dip class notes',
      years:['2015','2016','2017','2018','2019','2021','2022 note-tag','2023','2024','2025'],
      topics:[
        {title:'Classical Dynamics Map', body:`<p><b>Kinematics</b> describes geometry of motion. <b>Kinetics</b> connects motion with its causes.</p><div class="formula-grid"><div>Kinematics → displacement, velocity, acceleration</div><div>Kinetics → F=ma, Work–Energy, Impulse–Momentum</div></div>`, qb:'2023 directly asks “What is classical dynamics?”'},
        {title:'Force–Mass Acceleration', body:`<div class="math-block">ΣF = ma</div><p>On an incline, resolve forces parallel/perpendicular to the plane before applying F=ma.</p><p class="bn">FBD → choose positive direction → friction direction → ΣF=ma. এই sequence follow করলে sign ভুল কমে।</p>`, qb:'Prepared note contains several block-and-pulley acceleration problems.'},
        {title:'Work and Kinetic Energy', body:`<div class="math-block">W<sub>net</sub> = ΔKE = ½m(v<sub>2</sub><sup>2</sup>−v<sub>1</sub><sup>2</sup>)</div><p>Work of a constant force is F s cosθ. Friction work is negative when opposing motion.</p>`, qb:'Work–energy proof and incline numericals are highly repeated.'},
        {title:'Verified Incline Work Example', body:`<p>Backlog-style data: W=200 lb, α=35°, Q=125 lb, β=25°, μ=1/3, s=12 ft.</p><div class="math-block">N=Wcosα−Qsinβ=111.00 lb</div><div class="math-block">F<sub>f</sub>=μN=37.00 lb</div><div class="math-block">R<sub>along</sub>=Qcosβ−Wsinα−F<sub>f</sub>=−38.43 lb</div><div class="math-block">W<sub>net</sub>=Rs≈−461.13 ft·lb</div><p>Negative net work ⇒ kinetic energy decreases.</p>`, qb:'This numerical family is directly visible in the 2023 backlog paper.'},
        {title:'Linear Impulse–Momentum', body:`<div class="math-block">∫<sub>t1</sub><sup>t2</sup> F dt = m v<sub>2</sub> − m v<sub>1</sub></div><p>For constant resultant R: RΔt=Δ(mv).</p><p class="bn">Impulse = force × time; Momentum = mass × velocity. Unit consistency is essential.</p>`, qb:'A standard proof in 2016/2018/2023/2024 and related papers.'},
        {title:'Angular Impulse–Momentum', body:`<div class="math-block">∫ M<sub>O</sub> dt = I<sub>O</sub>(ω<sub>2</sub>−ω<sub>1</sub>)</div><p>Used for disk/shaft deceleration and rotating-body problems.</p>`, qb:'2023 disk + shaft problem is a direct application.'},
        {title:'Projectile / Plane Motion Shortcut', body:`<div class="math-block">x=v cosθ·t, &nbsp; y=v sinθ·t−½gt²</div><p>For the recurring motorcycle problem (70 mph, 30°, 20 ft ditch, launch point 10 ft above ground), the supplied-note method gives:</p><div class="math-block">h<sub>max</sub>≈20.73 ft</div><p class="bn">প্রথমে horizontal motion দিয়ে time; তারপর vertical equation দিয়ে height.</p>`, qb:'Motorcycle problem is note-tagged in 2015, 2018 and 2021.'}
      ],
      memory:['Kinematics = motion only', 'Kinetics = force + motion', 'Work–Energy is best for velocity–position', 'Impulse is best for velocity–time', 'Projectile: x gives t, y gives height']
    }
  ],
  partB: [
    {
      id:'b1', set:'Set B1', title:'Force System, Equilibrium & Free-Body Diagrams', priority:'Must Do', icon:'⊙',
      summary:'Definitions, support reactions, resultant, two-force members, transmissibility, FBD technique, wheel-over-block and boom/derrick patterns.',
      source:'10-EQU~1; Kabbo Sir force-system note; Arif Sir class note',
      years:['2015','2016','2017','2018','2019','2021','2023','2024','2025'],
      topics:[
        {title:'Free-Body Diagram', body:`<p>An FBD isolates a body/member and shows all external forces: weight, applied load, support reactions, tension/compression and friction.</p><ol><li>Identify the member to isolate.</li><li>Remove surroundings and replace contacts/supports by reactions.</li><li>Add gravity unless explicitly neglected.</li><li>For two-force members, forces are equal, opposite and collinear.</li></ol>`, qb:'FBD definition is note-tagged for 2015,16,17,18,21,22 and continues in 2023–2025.'},
        {title:'Transmissibility of Force', body:`<p>For a rigid body, moving a force anywhere along the same line of action without changing magnitude or direction does not alter the external equilibrium/motion effect.</p><p><b>Conditions:</b> same line of action, same magnitude, same direction.</p>`, qb:'One of the most repeated short definitions.'},
        {title:'Equilibrium', body:`<div class="math-block">ΣF<sub>x</sub>=0, &nbsp; ΣF<sub>y</sub>=0, &nbsp; ΣM=0</div><p>For a 3D rigid body, corresponding z-force and x/y/z moment equations are added.</p>`, qb:'Central to every statics numerical.'},
        {title:'Support Reactions', body:`<div class="formula-grid"><div><b>Roller</b><br>1 reaction normal to surface</div><div><b>Pin/Hinge</b><br>R<sub>x</sub>, R<sub>y</sub></div><div><b>Fixed</b><br>R<sub>x</sub>, R<sub>y</sub>, M</div></div><p class="bn">Support দেখেই unknown count লিখুন; তারপর equation count মিলান।</p>`, qb:'Frequently embedded inside FBD/beam questions.'},
        {title:'Resultant of Coplanar Concurrent Forces', body:`<div class="math-block">R=√[(ΣF<sub>x</sub>)²+(ΣF<sub>y</sub>)²]</div><div class="math-block">θ=tan⁻¹[(ΣF<sub>y</sub>)/(ΣF<sub>x</sub>)]</div><p>Always correct θ according to the quadrant of ΣFx, ΣFy.</p>`, qb:'Appears in force-system questions and class-note practice.'},
        {title:'Wheel Over a Block — Least Force', body:`<p>Recurring note problem: W=1000 lb, radius=3 ft, block geometry giving α=56.81°.</p><div class="math-block">F = <span class="frac"><span>W cos56.81°</span><span>sin(θ+56.81°)</span></span></div><p>Least F occurs when denominator is maximum: sin(θ+56.81°)=1.</p><div class="math-block">θ=33.19°, &nbsp; F<sub>min</sub>=547.42 lb</div>`, qb:'Note-tagged for 2015,16,17,21; backlog 2023 contains the same family.'},
        {title:'Two-Force Tension / Compression', body:`<p>Tension forces act away from the member; compression forces act toward the member. Rope/cable is tension-only; a weightless boom is commonly treated as a compression/two-force member.</p>`, qb:'Used in derrick/boom and truss questions.'}
      ],
      memory:['FBD first, equation second', 'Roller 1 reaction; hinge 2; fixed 3', 'Quadrant check after tan⁻¹', 'Least-force problems maximize the sine denominator']
    },
    {
      id:'b2', set:'Set B2', title:'Shear Force, Bending Moment & Pulley', priority:'Must Do', icon:'⌁',
      summary:'Equivalent distributed loads, reactions, shear/bending at a cut and pulley tension/reaction chains.',
      source:'2.1 SFBM; 2.2 Pulley; Kabbo Sir notes',
      years:['2015','2016','2017','2018','2019','2020*','2021','2023','2024','2025'],
      topics:[
        {title:'Shear Force & Bending Moment Definitions', body:`<p><b>Shear force</b> at a section = algebraic sum of external forces parallel to the section on either side.</p><p><b>Bending moment</b> at a section = algebraic sum of moments of all external forces about the section on either side.</p>`, qb:'Both definitions are note-tagged for 2016,17,18,19,21,22.'},
        {title:'Load Resultants', body:`<div class="formula-grid"><div><b>UDL w over L</b><br>W=wL at L/2</div><div><b>Triangular UVL</b><br>W=½wL at L/3 from heavy end</div><div><b>Trapezoid</b><br>split into rectangle + triangle</div><div><b>Point moment</b><br>adds to BM, not shear</div></div>`, qb:'Correct load replacement is the key to almost every beam numerical.'},
        {title:'SFBM Exam Workflow', body:`<ol><li>Replace UDL/UVL by equivalent point loads.</li><li>Draw support reactions.</li><li>Find reactions from ΣM=0 and ΣV=0.</li><li>Cut at the requested section.</li><li>Compute V and M from either left or right; both must agree.</li></ol><p class="bn">Cut-এর দুই side-এ একই answer না এলে sign/lever arm check করুন।</p>`, qb:'The supplied note labels a core beam pattern for 2018–2021.'},
        {title:'Verified Beam Example', body:`<p>In the prepared SFBM example with UDL, 30-kip point load, 20-kip-ft couple and triangular load:</p><div class="math-block">V<sub>B</sub>=109 kip, &nbsp; V<sub>E</sub>=36 kip</div><div class="math-block">At section (i): V=−21 kip, &nbsp; M=−48 kip·ft</div><p>The same result is obtained from either side of the cut.</p>`, qb:'Excellent template for 2018/2019/2021-style beam questions.'},
        {title:'Pulley Core Rule', body:`<p>For an ideal rope over frictionless, weightless pulleys, tension is constant along a continuous rope. A movable pulley supported by two equal rope segments has 2T upward.</p><p class="bn">Pulley chain-এ “একটা object কতগুলো tension segment দিয়ে supported?” সেটাই আগে count করুন।</p>`, qb:'Pulley is repeated in 2016,17,18,20,22 note tags and 2023–2025 papers.'},
        {title:'Pulley + Beam Example', body:`<p>Prepared Q1: ideal pulley system connected to a beam carrying 700 lb and 2 kip/ft UDL.</p><div class="math-block">ΣM<sub>A</sub>=0 ⇒ W=21,500 lb</div><p>Prepared Q2 family gives W=5,400 lb; another gives W=4,800 lb. The difference comes from the number of supporting rope segments.</p>`, qb:'Use the exact rope routing in the figure; never memorize W/4 or W/8 without counting.'}
      ],
      memory:['UDL → wL at midspan', 'Triangle → ½wL at L/3 from heavy end', 'Couple changes BM, not shear', 'Ideal continuous rope ⇒ same T']
    },
    {
      id:'b3', set:'Set B3', title:'Truss & Plane Motion', priority:'Very High', icon:'△',
      summary:'Truss assumptions, method of joints/sections, tension-compression identification, and the plane-motion/projectile crossover.',
      source:'3.1 Truss by 2223012; 3.2 Plane Motion; class notes',
      years:['2015','2016','2017','2018','2019','2021','2023','2024','2025'],
      topics:[
        {title:'Truss Definition & Assumptions', body:`<p>A truss is a framework of straight members arranged mainly in triangles.</p><ul><li>Joints are idealized as frictionless pins.</li><li>Loads act at joints.</li><li>Members are two-force members and carry axial tension/compression.</li><li>Bending of members is neglected in the ideal truss model.</li></ul>`, qb:'Definition/assumptions recur with numerical member-force calculation.'},
        {title:'Method of Joints', body:`<p>Find support reactions first. Start at a joint with at most two unknown member forces. Assume unknowns tension (arrows away); a negative result means compression.</p><div class="math-block">ΣF<sub>x</sub>=0, &nbsp; ΣF<sub>y</sub>=0</div>`, qb:'Best when many/all member forces are required.'},
        {title:'Method of Sections', body:`<p>Pass a cut through no more than three unknown members, isolate one side and use equilibrium.</p><div class="math-block">ΣM=0, &nbsp; ΣF<sub>x</sub>=0, &nbsp; ΣF<sub>y</sub>=0</div><p class="bn">যে member force দ্রুত চান, অন্য দুই cut-member-এর intersection point-এ moment নিন।</p>`, qb:'Common in Howe roof truss questions.'},
        {title:'Verified Truss Pattern', body:`<p>For the supplied sloping-truss example, reactions are first found from whole-truss equilibrium. A section through the target members gives:</p><div class="math-block">F<sub>GJ</sub>≈9.928 kips (Compression)</div><p>The prepared solution then proceeds member-by-member with section/joint equations.</p>`, qb:'Related to 2017/2022-tagged truss examples and later regular papers.'},
        {title:'Plane / Rectilinear Motion', body:`<p>Plane motion: every point of a body moves in planes parallel to a fixed plane. Rectilinear translation is straight-line motion where all points have the same displacement along parallel lines.</p>`, qb:'Often appears as a short definition combined with a mechanics numerical.'},
        {title:'Projectile Crossover', body:`<p>The motorcycle jump belongs to plane motion/particle projectile analysis and can be solved from x=vcosθ·t and y=vsinθ·t−½gt².</p>`, qb:'Recurring in historical papers and the dynamics set; cross-linked here intentionally.'}
      ],
      memory:['Truss member = axial force only', 'Assume tension first', 'Section cut ≤ 3 unknowns', 'Negative assumed tension ⇒ compression']
    },
    {
      id:'b4', set:'Set B4', title:'Friction, Wedge, Belt Friction & Flexible Cord', priority:'Must Do', icon:'μ',
      summary:'Limiting friction, angle of repose, sliding/tipping, wedge mechanics, belt friction and cable/parabolic/catenary equations.',
      source:'3.3-4.1-4.2 Friction; 4.3 Flexible Cord; regular/backlog papers',
      years:['2015','2016','2017','2018','2019','2021','2023','2024','2025'],
      topics:[
        {title:'Friction Basics', body:`<div class="math-block">F ≤ μN, &nbsp; F<sub>lim</sub>=μN</div><p>Static friction self-adjusts up to the limiting value. Kinetic friction acts during sliding and opposes relative motion.</p>`, qb:'Laws of friction and related numericals are persistent.'},
        {title:'Angle of Friction & Angle of Repose', body:`<p><b>Angle of friction φ:</b> angle between resultant reaction R and normal N at limiting friction.</p><div class="math-block">tanφ = μ</div><p><b>Angle of repose α:</b> inclination at which a body is just about to slide under its own weight. At impending slide, α=φ and tanα=μ.</p>`, qb:'Difference between the two appears repeatedly, including backlog 2023 and 2024/2025.'},
        {title:'Sliding vs Tipping Decision', body:`<ol><li>Calculate force required for impending sliding using F=μN.</li><li>Calculate force required for impending tipping by taking moment about the likely tipping edge.</li><li>The smaller required force determines what happens first.</li></ol><p class="bn"><b>Never decide from μ alone.</b> Geometry/height of force application controls tipping.</p>`, qb:'A classic repeated question across the regular and backlog papers.'},
        {title:'Belt Friction Proof Result', body:`<p>For a small belt element dθ at impending motion, resolving forces and using dF=μdN gives dT/T=μdθ.</p><div class="math-block">ln(T<sub>1</sub>/T<sub>2</sub>)=μθ</div><div class="math-block">T<sub>1</sub>=T<sub>2</sub>e<sup>μθ</sup></div><p>θ must be in radians.</p>`, qb:'A direct proof question in 2015, backlog 2023 and 2024.'},
        {title:'Wedge Problems', body:`<p>Draw a separate FBD for wedge and each contacting block. For smooth contact reaction is normal; with friction, resultant reaction is inclined by φ=tan⁻¹μ opposite impending motion.</p><p class="bn">Wedge-এ contact force direction ঠিক করতে impending motion আগে লিখুন।</p>`, qb:'Wedge appears in 2016 and recent regular/backlog papers.'},
        {title:'Parabolic Flexible Chord', body:`<p>When load is uniform per horizontal length, a cable approximates a parabola.</p><div class="math-block">y = <span class="frac"><span>wx<sup>2</sup></span><span>2H</span></span></div><div class="math-block">H = <span class="frac"><span>wL<sup>2</sup></span><span>8d</span></span></div><div class="math-block">T = √[H²+(wx)²]</div><p>At support x=L/2, tension is maximum.</p>`, qb:'Parabolic cable equations are common in 2017, 2024 and 2025.'},
        {title:'Catenary', body:`<p>When the cable load is its own uniform weight per unit cable length, the curve is a catenary.</p><div class="math-block">y = k cosh(x/k)</div><p>Here k=H/w under the usual notation. The derivation comes from cable equilibrium and ds²=dx²+dy².</p>`, qb:'Catenary proof/conditions appear in 2015 and related papers.'},
        {title:'Cable Length Approximation', body:`<p>For a shallow parabolic cable with equal-level supports:</p><div class="math-block">S ≈ L + <span class="frac"><span>8d²</span><span>3L</span></span> − <span class="frac"><span>32d⁴</span><span>5L³</span></span></div><p>Use only when sag/span is suitably small.</p>`, qb:'Useful for span/length cable numericals.'}
      ],
      memory:['Friction opposes impending/relative motion', 'At limiting state F=μN', 'Slide vs tip: compare required forces', 'Belt θ in radians', 'Parabola: load per horizontal length; catenary: self-weight per cable length']
    }
  ],
  formulas: [
    {cat:'Centroid', name:'Composite area', formula:'x̄ = ΣAᵢxᵢ / ΣAᵢ ; ȳ = ΣAᵢyᵢ / ΣAᵢ', note:'Cut-out/hole: use negative A.'},
    {cat:'Centroid', name:'Triangle', formula:'From base: ȳ = h/3; from a vertical side for right triangle: x̄ = b/3', note:'Centroid divides a median 2:1 from vertex.'},
    {cat:'Centroid', name:'Semicircle area', formula:'ȳ = 4r/(3π) from diameter', note:'On symmetry axis.'},
    {cat:'Centroid', name:'Quarter circle area', formula:'x̄ = ȳ = 4r/(3π)', note:'From the two straight sides.'},
    {cat:'Centroid', name:'Circular arc ±β', formula:'x̄ = r sinβ / β', note:'β in radians.'},
    {cat:'Centroid', name:'Circular sector ±β', formula:'x̄ = 2r sinβ / (3β)', note:'β in radians.'},
    {cat:'Area MOI', name:'Rectangle centroidal', formula:'Iₓ = bh³/12 ; Iᵧ = hb³/12', note:'Area units to fourth power.'},
    {cat:'Area MOI', name:'Triangle base / centroid', formula:'Iₓ,base = bh³/12 ; Iₓ,G = bh³/36', note:'Centroidal axis parallel to base.'},
    {cat:'Area MOI', name:'Circle centroidal diameter', formula:'Iₓ = Iᵧ = πr⁴/4', note:'Polar J = πr⁴/2.'},
    {cat:'Area MOI', name:'Parallel-axis theorem', formula:'I = Ī + Ad²', note:'d perpendicular between parallel axes.'},
    {cat:'Area MOI', name:'Polar theorem', formula:'J = Iₓ + Iᵧ', note:'Axes intersect at same point; z perpendicular.'},
    {cat:'Area MOI', name:'Radius of gyration', formula:'k = √(I/A)', note:'Length unit.'},
    {cat:'Product Inertia', name:'Definition', formula:'Pₓᵧ = ∫xy dA', note:'Can be +, − or 0.'},
    {cat:'Product Inertia', name:'Transfer', formula:'Pₓᵧ = P̄ₓᵧ + A dₓ dᵧ', note:'Signs of dₓ,dᵧ matter.'},
    {cat:'Product Inertia', name:'Principal values', formula:'Imax,min = (Iₓ+Iᵧ)/2 ± √{[(Iₓ−Iᵧ)/2]² + Pₓᵧ²}', note:'Principal product inertia becomes zero.'},
    {cat:'Mass MOI', name:'Parallel-axis', formula:'I = Ī + md²', note:'Use mass, not area.'},
    {cat:'Mass MOI', name:'Slender rod center', formula:'I = mL²/12', note:'Axis perpendicular to rod through center.'},
    {cat:'Mass MOI', name:'Slender rod end', formula:'I = mL²/3', note:'Axis perpendicular to rod through end.'},
    {cat:'Mass MOI', name:'Solid cylinder/disk axis', formula:'I = mr²/2', note:'Geometric longitudinal axis / disk normal axis.'},
    {cat:'Mass MOI', name:'Solid sphere diameter', formula:'I = 2mr²/5', note:'Any diameter.'},
    {cat:'Pappus', name:'Surface theorem', formula:'S = 2πȳL', note:'Curve length L × distance traveled by curve centroid.'},
    {cat:'Pappus', name:'Volume theorem', formula:'V = 2πȳA', note:'Area A × distance traveled by area centroid.'},
    {cat:'Statics', name:'2D equilibrium', formula:'ΣFₓ=0 ; ΣFᵧ=0 ; ΣM=0', note:'Use consistent signs.'},
    {cat:'Statics', name:'Resultant', formula:'R = √[(ΣFₓ)²+(ΣFᵧ)²]', note:'Angle from atan2 concept / quadrant check.'},
    {cat:'Beam', name:'UDL resultant', formula:'W = wL at L/2', note:'Uniform load.'},
    {cat:'Beam', name:'Triangular UVL resultant', formula:'W = ½wL at L/3 from heavy end', note:'2L/3 from zero end.'},
    {cat:'Friction', name:'Limiting friction', formula:'F = μN', note:'At impending motion only.'},
    {cat:'Friction', name:'Angle relation', formula:'tanφ = μ ; at repose α=φ', note:'Static limiting state.'},
    {cat:'Belt', name:'Belt friction', formula:'T₁ = T₂ exp(μθ)', note:'θ in radians.'},
    {cat:'Cable', name:'Parabolic cable ordinate', formula:'y = wx²/(2H)', note:'w per horizontal length.'},
    {cat:'Cable', name:'Horizontal tension', formula:'H = wL²/(8d)', note:'Equal-level supports.'},
    {cat:'Cable', name:'Cable tension', formula:'T = √[H²+(wx)²]', note:'x from lowest point.'},
    {cat:'Catenary', name:'Catenary equation', formula:'y = k cosh(x/k)', note:'With chosen origin/constant convention.'},
    {cat:'Dynamics', name:'Newton II', formula:'ΣF = ma', note:'Use mass; in FPS m=W/g.'},
    {cat:'Dynamics', name:'Constant acceleration', formula:'v=u+at ; s=ut+½at² ; v²=u²+2as', note:'One-dimensional constant a.'},
    {cat:'Work–Energy', name:'Work', formula:'W = Fs cosθ', note:'Force constant.'},
    {cat:'Work–Energy', name:'Work–kinetic energy', formula:'Wnet = ΔKE = ½m(v₂²−v₁²)', note:'Scalar energy method.'},
    {cat:'Impulse', name:'Linear impulse–momentum', formula:'∫Fdt = m v₂ − m v₁', note:'Vector relation.'},
    {cat:'Impulse', name:'Angular impulse–momentum', formula:'∫Mdt = I(ω₂−ω₁)', note:'For constant I about chosen axis.'},
    {cat:'Projectile', name:'Projectile', formula:'x=v cosθ·t ; y=v sinθ·t−½gt²', note:'No air resistance.'}
  ],
  proofs: [
    {id:'p1', title:'Centroid of a Triangle: ȳ = h/3', priority:'Very High', years:'2016, 2018, 2021 note tags', source:'Centroid prepared note pp. 5–8', steps:[
      'Take a horizontal elemental strip at height y and thickness dy.',
      'By similar triangles, strip width = b(h−y)/h, so dA = b(h−y)dy/h.',
      'Total area A = bh/2.',
      'First moment about base: ∫₀ʰ y dA = ∫₀ʰ y·b(h−y)/h dy = bh²/6.',
      'Therefore ȳ = (bh²/6)/(bh/2) = h/3.'
    ], result:'ȳ = h/3 from the base; equivalently 2h/3 from the opposite vertex.'},
    {id:'p2', title:'Perpendicular-Axis Theorem: J = Iₓ + Iᵧ', priority:'Must Do', years:'Repeated theory', source:'Moment of Inertia lecture slide', steps:[
      'For elemental area dA at (x,y), distance from perpendicular z-axis is r.',
      'r² = x² + y².',
      'J = ∫r²dA = ∫(x²+y²)dA.',
      'Split the integral: J = ∫x²dA + ∫y²dA = Iᵧ + Iₓ.'
    ], result:'Jₒ = Iₓ + Iᵧ for mutually perpendicular axes meeting at O.'},
    {id:'p3', title:'Parallel-Axis Theorem for Area', priority:'Must Do', years:'Repeated theorem/application', source:'MOI slides + class note', steps:[
      'Let x̄-axis pass through the centroid and x-axis be parallel at distance d.',
      'For elemental area, y = ȳ′ + d.',
      'Iₓ = ∫(ȳ′+d)²dA = ∫ȳ′²dA + 2d∫ȳ′dA + d²∫dA.',
      'Because x̄-axis is centroidal, ∫ȳ′dA = 0.',
      'Thus Iₓ = Īₓ + Ad².'
    ], result:'I = Ī + Ad².'},
    {id:'p4', title:'Triangle Area MOI about Centroidal Axis', priority:'High', years:'Common derivation', source:'MOI lecture slide / class note', steps:[
      'Using a horizontal strip, width at y from the base is b(1−y/h).',
      'First obtain I about base: Ibase = ∫₀ʰ y²·b(1−y/h)dy = bh³/12.',
      'Triangle centroid is h/3 from base and A=bh/2.',
      'By parallel-axis theorem: Ibase = IG + A(h/3)².',
      'IG = bh³/12 − (bh/2)(h²/9) = bh³/36.'
    ], result:'Iₓ,G = bh³/36.'},
    {id:'p5', title:'Pappus–Guldinus Surface Theorem', priority:'High', years:'2015/2018/2023 family', source:'Pappus-Guldinus lecture slides', steps:[
      'Take an elemental curve length dL at distance y from the axis.',
      'On a full revolution it generates dS = (2πy)dL.',
      'Integrate: S = 2π∫y dL.',
      'By the centroid definition of a line, ȳ = (∫y dL)/L.',
      'Therefore S = 2πȳL.'
    ], result:'Surface area = generating curve length × distance traveled by its centroid.'},
    {id:'p6', title:'Pappus–Guldinus Volume Theorem', priority:'High', years:'2018/2023/2025 family', source:'Pappus-Guldinus lecture slides', steps:[
      'Take elemental area dA at distance y from the axis.',
      'Its revolution sweeps dV = (2πy)dA.',
      'Integrate: V = 2π∫y dA.',
      'For area centroid, ȳ = (∫y dA)/A.',
      'Hence V = 2πȳA.'
    ], result:'Volume = generating area × distance traveled by its centroid.'},
    {id:'p7', title:'Work–Kinetic Energy Principle', priority:'Must Do', years:'Repeated, including 2023', source:'Work, Power and Energy note', steps:[
      'Newton’s second law along the path: R = ma.',
      'Use a = v dv/ds, so R ds = m v dv.',
      'Integrate from state 1 to 2: ∫R ds = ∫m v dv.',
      'Left side is net work; right side is ½m(v₂²−v₁²).'
    ], result:'Wnet = KE₂ − KE₁ = ΔKE.'},
    {id:'p8', title:'Linear Impulse–Momentum Principle', priority:'Must Do', years:'Repeated proof', source:'Impulse Momentum note', steps:[
      'From Newton II: F = m dv/dt for constant mass.',
      'Multiply by dt: Fdt = m dv.',
      'Integrate t₁→t₂ and v₁→v₂.',
      '∫Fdt = m(v₂−v₁).'
    ], result:'Impulse equals change in linear momentum.'},
    {id:'p9', title:'Belt Friction: T₁ = T₂exp(μθ)', priority:'Very High', years:'2015/backlog 2023/2024 family', source:'Friction note + question papers', steps:[
      'Consider a differential belt element subtending dθ with tension T and T+dT.',
      'At impending slip, differential friction dF = μ dN.',
      'Tangential equilibrium (neglecting second-order small terms) gives dT = μ dN.',
      'Normal equilibrium gives dN ≈ T dθ.',
      'Therefore dT/T = μ dθ.',
      'Integrate from T₂ to T₁ and 0 to θ: ln(T₁/T₂)=μθ.'
    ], result:'T₁/T₂=exp(μθ), with θ in radians.'},
    {id:'p10', title:'Parabolic Cable Equation', priority:'Very High', years:'2017/2024/2025 family', source:'Flexible Cord note', steps:[
      'Take the lowest point as origin and a cable segment from 0 to x.',
      'Horizontal component of tension H is constant.',
      'Uniform load over horizontal projection x is wx.',
      'Vertical equilibrium gives T sinθ = wx; horizontal gives T cosθ = H.',
      'Thus tanθ = wx/H = dy/dx.',
      'Integrate with y=0 at x=0: y = wx²/(2H).',
      'At support x=L/2, y=d, so H=wL²/(8d).'
    ], result:'y=wx²/(2H); H=wL²/(8d).'},
    {id:'p11', title:'Catenary Equation — Core Derivation Path', priority:'High', years:'2015 family', source:'Flexible Cord note', steps:[
      'For self-weight w per unit cable length, vertical load on a segment is ws where s is arc length from the lowest point.',
      'With constant horizontal tension H, tanθ=ws/H.',
      'Since dy/dx=tanθ and ds²=dx²+dy², differential equations relate s and x.',
      'Let k=H/w. Integration leads to hyperbolic functions.',
      'With the conventional origin, the catenary may be written y=k cosh(x/k), up to a vertical datum constant.'
    ], result:'y = k cosh(x/k) under the convention used in the supplied notes.'}
  ],
  priorityTopics: [
    {rank:1, topic:'Centroid + Composite Area', level:'Must Do', evidence:'Centroid definition note-tagged 2015–2022; composite centroid remains present in 2023–2025.'},
    {rank:2, topic:'Area Moment of Inertia + Parallel Axis', level:'Must Do', evidence:'Appears in essentially every supplied regular-paper era and recent papers.'},
    {rank:3, topic:'FBD + Equilibrium + Support Reactions', level:'Must Do', evidence:'FBD definition note-tagged 2015,16,17,18,21,22; recent papers continue it.'},
    {rank:4, topic:'Shear Force & Bending Moment', level:'Must Do', evidence:'Definition note-tagged 2016,17,18,19,21,22; beam numericals recur in recent papers.'},
    {rank:5, topic:'Friction / Angle of Repose / Sliding-Tipping', level:'Must Do', evidence:'Repeated across historical, recent regular and backlog papers.'},
    {rank:6, topic:'Work–Energy + Impulse–Momentum', level:'Must Do', evidence:'Core dynamics proof/numerical family throughout the bank.'},
    {rank:7, topic:'Pulley', level:'Very High', evidence:'Prepared note tags 2017,18,20,22 for a repeated pattern; recent papers also use it.'},
    {rank:8, topic:'Truss', level:'Very High', evidence:'Truss numericals repeatedly request selected members or all members.'},
    {rank:9, topic:'Product of Inertia / Principal MOI', level:'Very High', evidence:'Z-section problem note-tagged 2017–2022; 2023/2025 continue principal/product-inertia themes.'},
    {rank:10, topic:'Flexible Cord / Cable', level:'Very High', evidence:'Catenary/parabolic cable questions recur, especially 2015, 2017, 2024, 2025 families.'},
    {rank:11, topic:'Mass MOI', level:'High', evidence:'Frustum/disk/cylinder/sphere/mallet patterns across old and recent papers.'},
    {rank:12, topic:'Pappus–Guldinus', level:'High', evidence:'Surface/volume applications recur in 2015/2018/2023/2025 families.'},
    {rank:13, topic:'Wheel least force / obstacle', level:'High', evidence:'Prepared note tags 2015,16,17,21 and backlog repeats it.'},
    {rank:14, topic:'Wedge', level:'High', evidence:'Repeated in 2016 and recent regular/backlog statics.'},
    {rank:15, topic:'Projectile / Plane Motion', level:'High', evidence:'Motorcycle problem note-tagged 2015,18,21 and appears as a classic pattern.'}
  ],
  paperMatrix: [
    {year:'2015', a:'FBD/wheel; cable+beam; friction/belt; truss', b:'Centroid/Pappus; Area MOI; impulse+mass MOI; work-energy/projectile', verified:true},
    {year:'2016', a:'FBD/resultant; beam+pulley; truss+wheel; friction+wedge', b:'Centroid; Area MOI; Work/CG; Impulse/jet', verified:true},
    {year:'2017', a:'FBD+wheel; beam+cable; pulley+friction; truss+plane motion', b:'Centroid; MOI; product inertia; impulse', verified:true},
    {year:'2018', a:'Centroid; Area MOI; Pappus/Product-type; Work+Impulse', b:'FBD/derrick; beam+pulley; truss; friction/plane motion', verified:true},
    {year:'2019', a:'Centroid; Area/Polar MOI; Product Inertia; Dynamics/Work', b:'Resultant/FBD; beam+pulley; truss; friction/belt/wedge', verified:true},
    {year:'2020*', a:'Exceptional set arrangement', b:'Exceptional set arrangement', verified:false},
    {year:'2021', a:'FBD/wheel; cable+beam; friction; impulse/work/projectile', b:'Centroid; Area/Product MOI; truss; impulse', verified:true},
    {year:'2023', a:'Centroid; Area MOI; Principal/Mass MOI; Dynamics/Work/Impulse', b:'FBD/supports; beam+pulley; truss; friction/cable/wedge', verified:true},
    {year:'2024', a:'FBD/supports; beam+cable; truss+pulley; friction+wedge', b:'Centroid; Area/Mass MOI; dynamics/impulse; impact/tipping', verified:true},
    {year:'2025', a:'FBD/cylinder; beam+cable; truss+pulley; friction+wedge', b:'Centroid; Work+Area MOI; Mass MOI/jet; Product MOI/dynamics', verified:true}
  ],
  solutions: [
    {id:'s-centroid-parabola', rank:1, title:'Centroid of area bounded by y²=4x and x²=4y', group:'Part A · Centroid', years:['2022 note-tag','2024 family'], source:'Prepared centroid note + verified calculation', question:'Find the centroid of the first-quadrant area bounded by y²=4x and x²=4y.', sketch:'parabola', steps:[
      'Find intersections: substitute y=x²/4 into y²=4x → x=0 or 4, giving (0,0) and (4,4).',
      'Use horizontal strips: xright=2√y and xleft=y²/4 for 0≤y≤4.',
      'Area A=∫₀⁴(xright−xleft)dy=16/3.',
      'First moment about y-axis: Qy=∫₀⁴½(xright²−xleft²)dy=48/5.',
      'x̄=Qy/A=(48/5)/(16/3)=9/5.',
      'The region is symmetric about y=x, therefore ȳ=x̄=9/5.'
    ], answer:'(x̄,ȳ)=(1.8 in, 1.8 in)', tip:'Symmetry catches the second coordinate for free.'},
    {id:'s-l-section-moi', rank:2, title:'Composite L-section centroid + MOI', group:'Part A · Area MOI', years:['Core template'], source:'Shuvo Dip/Hamid class-note pattern + verified arithmetic', question:'For a 2×8 in vertical rectangle and 7×2 in top rectangle forming an L-section, find centroid and centroidal Ix, Iy.', sketch:'lsection', steps:[
      'Areas: A1=2×8=16 in²; A2=7×2=14 in².',
      'Centroids from bottom-left reference: (x1,y1)=(1,4), (x2,y2)=(3.5,9).',
      'x̄=(16×1+14×3.5)/30=2.1667 in; ȳ=(16×4+14×9)/30=6.3333 in.',
      'Use I=Ī+Ad² for each rectangle about centroidal x-axis and sum: Ix=276.67 in⁴.',
      'Repeat about centroidal y-axis: Iy=109.17 in⁴.'
    ], answer:'x̄=2.167 in, ȳ=6.333 in; Ix≈276.67 in⁴; Iy≈109.17 in⁴', tip:'Coordinates first; transfer distances are part-centroid minus composite-centroid.'},
    {id:'s-z-product', rank:3, title:'Z-section product of inertia + principal MOI', group:'Part A · Product Inertia', years:['2017','2018','2019','2020*','2021','2022 note-tag'], source:'3.1 Product of Inertia prepared note', question:'For the supplied 8×5×1 in Z-section, find Pxy, maximum/minimum MOI and radii of gyration.', sketch:'zsection', steps:[
      'Split the section into three rectangles about centroidal x′ and y′ axes.',
      'For each rectangle use Pxy=P̄+A dx dy. Each rectangle has P̄=0 about its own centroidal axes.',
      'Top flange: +35 in⁴; web: 0; bottom flange: +35 in⁴. Hence Pxy=70 in⁴.',
      'From the supplied solution, Ix=141.34 in⁴ and Iy=61.33 in⁴.',
      'Iavg=(141.34+61.33)/2=101.335 in⁴.',
      'R=√{[(141.34−61.33)/2]²+70²}=80.625 in⁴.',
      'Imax=181.96 in⁴; Imin=20.71 in⁴.',
      'Total area A=16 in², so kmax=√(181.96/16)=3.372 in and kmin≈√(20.71/16)=1.138 in.'
    ], answer:'Pxy=70 in⁴; Imax=181.96 in⁴; Imin=20.71 in⁴; kmax=3.372 in; kmin≈1.138 in', tip:'For product inertia, dx·dy sign comes from the quadrant.'},
    {id:'s-mallet', rank:4, title:'Mallet — mass MOI and radius of gyration', group:'Part A · Mass MOI', years:['2022 note-tag','2025 family'], source:'3.2 Moment of Inertia of Masses prepared note', question:'3 ft handle weighs 3.14 lb; cylindrical head weighs 16.16 lb. Find radius of gyration about y-axis.', sketch:'mallet', steps:[
      'Convert each weight to mass using m=W/g, g=32.2 ft/s².',
      'Handle is a slender rod: Iy1=Īy+ m1d1² = m1L²/12 + m1(1 ft)² ≈0.17 slug·ft².',
      'Head is a cylinder. Use its centroidal MOI about a transverse axis and shift by d2=2.75 ft as in the supplied geometry.',
      'Supplied calculation gives Iy2≈3.83 slug·ft².',
      'Total Iy≈4.00 slug·ft².',
      'Total mass=(3.14+16.16)/32.2 slug.',
      'k=√(I/m)≈2.59 ft.'
    ], answer:'Iy≈4.00 slug·ft²; ky≈2.59 ft', tip:'In FPS: never use lb directly as mass; divide weight by g.'},
    {id:'s-work-incline', rank:5, title:'Inclined block — resultant and net work', group:'Part A · Work–Energy', years:['Backlog 2023 family'], source:'Backlog 2023 + verified calculation', question:'W=200 lb, α=35°, Q=125 lb at β=25° above the incline, μ=1/3, displacement=12 ft up the incline. Find resultant along motion and net work.', sketch:'inclinework', steps:[
      'Normal equilibrium: N=Wcos35°−Qsin25°=111.00 lb.',
      'Friction opposing upward motion: Ff=μN=(1/3)(111.00)=37.00 lb.',
      'Along incline (up positive): R=Qcos25°−Wsin35°−Ff.',
      'R=−38.43 lb, so the resultant acts down the incline.',
      'Net work over 12 ft: Wnet=R·s=−38.43×12=−461.13 ft·lb.',
      'Since Wnet<0, kinetic energy/velocity decreases.'
    ], answer:'Resultant = 38.43 lb down the incline; Wnet≈−461.13 ft·lb', tip:'Normal force changes because Q has a component away from the plane.'},
    {id:'s-motorcycle', rank:6, title:'Motorcycle projectile — maximum landing height', group:'Part A · Dynamics', years:['2015','2018','2021 note tags'], source:'4.1 Dynamics prepared note', question:'A motorcycle leaves at 70 mph, 30°, crosses a 20 ft ditch. Launch point is 10 ft above ground. Find maximum landing height h.', sketch:'projectile', steps:[
      'Convert 70 mph≈102.67 ft/s (or use SI consistently).',
      'Horizontal travel x=20 ft gives t=x/(v cos30°).',
      'Vertical rise relative to launch: y=v sin30°·t−½gt²≈10.7 ft (minor difference depends on rounded conversions).',
      'Add the 10 ft launch elevation.',
      'The supplied note calculation gives h≈20.73 ft.'
    ], answer:'hmax≈20.73 ft (using the supplied-note conversion/rounding)', tip:'Do not use the range formula because launch and landing elevations differ.'},
    {id:'s-wheel', rank:7, title:'Wheel over block — least force', group:'Part B · Equilibrium', years:['2015','2016','2017','2021','Backlog 2023'], source:'Equilibrium prepared note', question:'For W=1000 lb, radius 3 ft and the supplied block geometry, find the least force F and its direction.', sketch:'wheel', steps:[
      'At impending rotation over the corner, ground reaction becomes zero and the wheel pivots about the block corner.',
      'Geometry gives α′=sin⁻¹(2/3)=41.81° and α=α′+15°=56.81°.',
      'Take moments about the corner: F sin(θ+56.81°)=W cos56.81°.',
      'Thus F=547.42/sin(θ+56.81°).',
      'For minimum F, denominator must be 1: θ+56.81°=90°.',
      'Therefore θ=33.19° and Fmin=547.42 lb.'
    ], answer:'Fmin=547.42 lb at θ=33.19°', tip:'Least-force problems: optimize the trigonometric denominator after the moment equation.'},
    {id:'s-beam', rank:8, title:'Beam SFBM — complete cut solution', group:'Part B · SFBM', years:['2018','2019','2020*','2021'], source:'2.1 SFBM prepared note', question:'For the prepared beam with UDL, 30-kip point load, 20-kip-ft couple and triangular load, find reactions and V/M at section (i).', sketch:'beam', steps:[
      'Replace the UDL and triangular UVL by their point-resultants at their centroids.',
      'From whole-beam moment equilibrium about B, the note obtains VE=36 kip.',
      'From vertical equilibrium, VB=109 kip. Horizontal reaction is zero.',
      'Cut at section (i). Left-side vertical equilibrium gives V=−21 kip.',
      'Left-side moment equilibrium about the cut gives M=−48 kip·ft.',
      'Checking from the right side gives the same V and M, confirming signs and lever arms.'
    ], answer:'VB=109 kip; VE=36 kip; V(i)=−21 kip; M(i)=−48 kip·ft', tip:'A pure couple enters the BM equation but not the shear equation.'},
    {id:'s-pulley', rank:9, title:'Pulley + beam equilibrium — W=21,500 lb', group:'Part B · Pulley', years:['2016 family'], source:'2.2 Pulley prepared note', question:'Ideal pulley system supports W and pulls a beam carrying 700 lb plus 2 kip/ft UDL. Find W.', sketch:'pulley', steps:[
      'Count supporting rope segments on the movable pulley block. The beam-end rope tension is W/4 for this routing.',
      'The UDL is 2,000 lb/ft over 6 ft, resultant 12,000 lb acting 3 ft from its loaded-span center reference shown in the note.',
      'Take moments about beam support A exactly as in the supplied geometry:',
      '−(2000×6×3) − (700×10) + (W/4×8)=0.',
      'Solve W=21,500 lb.'
    ], answer:'W=21,500 lb', tip:'Do not reuse W/4 for a different pulley diagram; derive it from the rope path.'},
    {id:'s-truss', rank:10, title:'Truss — section method template', group:'Part B · Truss', years:['2017','2022 note-tag','Recent family'], source:'3.1 Truss prepared note', question:'For the supplied sloping truss, find selected member forces using a section.', sketch:'truss', steps:[
      'Resolve the inclined external loads and find whole-truss reactions first.',
      'The prepared solution obtains Gy=10.7648 k, Ax=5.5 k and Ay=−2.4347 k.',
      'Pass section (i)-(i) through the target members.',
      'Take moment about C so two cut-member forces vanish from the equation.',
      'Solving gives FGJ=−9.9278 k relative to assumed tension.',
      'Negative assumed tension means compression.'
    ], answer:'FGJ≈9.928 kips (Compression) for the supplied example', tip:'Choose a moment center that eliminates the maximum number of unknown cut forces.'},
    {id:'s-belt', rank:11, title:'Belt friction derivation', group:'Part B · Friction', years:['2015','Backlog 2023','2024'], source:'Friction notes + QB', question:'Prove T₁=T₂exp(μθ).', sketch:'belt', steps:[
      'Take a small belt element subtending dθ.',
      'Let tensions be T and T+dT and normal reaction be dN.',
      'At impending slip, dF=μdN.',
      'Tangential equilibrium gives dT≈dF=μdN.',
      'Normal equilibrium for a small element gives dN≈T dθ.',
      'Hence dT/T=μdθ.',
      'Integrate: ln(T₁/T₂)=μθ, so T₁=T₂exp(μθ).'
    ], answer:'T₁/T₂=exp(μθ), θ in radians', tip:'The exponential formula is invalid if θ is substituted in degrees.'},
    {id:'s-cable', rank:12, title:'Parabolic cable — sag/tension equations', group:'Part B · Flexible Cord', years:['2017','2024','2025'], source:'Flexible Cord prepared note', question:'Derive the parabolic cable equation and support tension relation.', sketch:'cable', steps:[
      'Take the lowest point O as origin and a cable segment ending at (x,y).',
      'Horizontal tension component is H; load over x is wx.',
      'Equilibrium: Tcosθ=H and Tsinθ=wx.',
      'Thus dy/dx=tanθ=wx/H.',
      'Integrate: y=wx²/(2H).',
      'At x=L/2, y=d gives H=wL²/(8d).',
      'At any x, T=√(H²+(wx)²); maximum at the supports.'
    ], answer:'y=wx²/(2H); H=wL²/(8d); Tmax=√[H²+(wL/2)²]', tip:'w is load per horizontal length for a parabolic cable.'},
    {id:'s-impulse', rank:13, title:'Linear impulse–momentum proof', group:'Part A · Impulse', years:['2016','2018','2023','2024 family'], source:'Impulse Momentum note', question:'State and prove the principle of linear impulse and momentum.', sketch:'impulse', steps:[
      'State: total impulse of external forces over a time interval equals the change in linear momentum.',
      'Start with F=ma=m dv/dt.',
      'Rearrange Fdt=m dv.',
      'Integrate from t1 to t2: ∫Fdt=m∫dv.',
      'Therefore ∫Fdt=m(v2−v1). For constant resultant R, RΔt=Δ(mv).'
    ], answer:'∫Fdt = mv₂−mv₁', tip:'Write it as a vector principle unless the problem is one-dimensional.'},
    {id:'s-pappus', rank:14, title:'Pappus cone surface / paint template', group:'Part A · Pappus', years:['2015','Backlog 2023 family'], source:'Pappus lecture slide + QB', question:'Use Pappus-Guldinus to find the lateral area of a cone of radius r and height h, then paint for inside and outside.', sketch:'cone', steps:[
      'The generating line is the slant length l=√(r²+h²).',
      'Centroid of a straight generating segment lies at its midpoint, distance r/2 from the axis.',
      'Pappus surface theorem: Sone=2π(r/2)l=πrl.',
      'For both inside and outside surfaces of a thin shell, Stotal=2πrl.',
      'Paint gallons=Stotal/(coverage per gallon), if both surfaces are intended and no base/top areas are specified.'
    ], answer:'One lateral surface = πr√(r²+h²); both faces = 2πr√(r²+h²)', tip:'State clearly which surfaces are included; question wording may exclude base/opening.'},
    {id:'s-fma', rank:15, title:'Force–mass acceleration block', group:'Part A · Dynamics', years:['Prepared practice'], source:'4.1 Dynamics note', question:'300 N block on horizontal plane, P=200 N applied at 30° downward, μk=0.2. From rest, find position and velocity at 5 s.', sketch:'fma', steps:[
      'Vertical component of P is 200sin30°=100 N downward, so N=300+100=400 N.',
      'Friction=μN=0.2×400=80 N.',
      'Horizontal net force=200cos30°−80.',
      'Mass=300/9.8 kg. Therefore a≈3.04 m/s².',
      'From rest: s=½at²=½×3.04×25=38.05 m.',
      'v=at=3.04×5=15.2 m/s.'
    ], answer:'a≈3.04 m/s²; s≈38.05 m; v≈15.2 m/s', tip:'A downward angled pull/push increases N; an upward component decreases N.'}
    ,{id:'s-fbd', rank:16, title:'FBD + transmissibility + two-force member — exam answer', group:'Part B · Equilibrium', years:['2015','2016','2017','2018','2021','2022 note-tag','Backlog 2023'], source:'Equilibrium prepared note', question:'Define FBD, transmissibility of force, two-force member and equilibrium; state how to draw the FBD.', sketch:'wheel', steps:[
      'Free-body diagram: isolate the body/member and show every external force, applied load, weight, support reaction and friction acting on it.',
      'Transmissibility: for a rigid body, a force may be moved anywhere along the same line of action without changing the external equilibrium/motion, provided magnitude and direction are unchanged.',
      'Two-force member: if only two forces act on an equilibrium member, the forces must be equal, opposite and collinear.',
      'Equilibrium in a coplanar system requires ΣFₓ=0, ΣFᵧ=0 and ΣM=0.',
      'Drawing shortcut: isolate tension/compression members first; then replace each support by its correct reaction components; add self-weight unless the problem says weightless.'
    ], answer:'Write definitions + a clean isolated sketch; show support reactions and all external actions.', tip:'বাংলা মনে রাখুন: “আলাদা করো → সব বাহ্যিক বল দেখাও → সাপোর্টকে reaction দিয়ে বদলাও।”'},
    {id:'s-resultant', rank:17, title:'Coplanar resultant — component method', group:'Part B · Force System', years:['2016','2019 family'], source:'Equilibrium prepared note', question:'For the prepared concurrent-force example, determine resultant magnitude and direction.', sketch:'fma', steps:[
      'Choose +x to the right and +y upward. Resolve every inclined force before adding.',
      'The prepared example gives ΣFₓ=37.79 kN and ΣFᵧ=−21.81 kN.',
      'Magnitude: R=√[(ΣFₓ)²+(ΣFᵧ)²]=43.633 kN.',
      'Reference angle: tan⁻¹(|ΣFᵧ|/|ΣFₓ|)=29.99°.',
      'Because ΣFₓ>0 and ΣFᵧ<0, the resultant lies in quadrant IV: 29.99° below the +x-axis.'
    ], answer:'R≈43.633 kN, 29.99° below +x-axis for the prepared example', tip:'Never decide the quadrant from tan⁻¹ alone; use the signs of ΣFₓ and ΣFᵧ.'},
    {id:'s-triangle-centroid', rank:18, title:'Triangle centroid — full derivation', group:'Part A · Centroid', years:['2016','2018','2021 note-tags'], source:'Centroid prepared note', question:'Derive the centroid of a triangle of base b and height h.', sketch:'parabola', steps:[
      'Take a horizontal strip at height y with thickness dy. From similar triangles, strip width = b(h−y)/h.',
      'Thus dA=[b(h−y)/h]dy and A=bh/2.',
      'First moment about the base: ∫y dA = ∫₀ʰ y·b(h−y)/h dy = bh²/6.',
      'Therefore ȳ=(∫y dA)/A=(bh²/6)/(bh/2)=h/3 from the base.',
      'Similarly, for the usual right-triangle reference, x̄=b/3 from the perpendicular side; in any triangle the centroid is the intersection of the medians and divides each median 2:1.'
    ], answer:'ȳ=h/3 from the base; centroid lies at the intersection of medians.', tip:'মনে রাখুন: triangle centroid = base থেকে h/3, vertex থেকে 2h/3.'},
    {id:'s-perp-axis', rank:19, title:'Perpendicular-axis theorem — J = Iₓ + Iᵧ', group:'Part A · Area MOI', years:['2018','2019','2021','Backlog 2023'], source:'MOI lecture slide + prepared notes', question:'Prove the perpendicular-axis theorem for a plane area.', sketch:'lsection', steps:[
      'For an element dA at coordinates (x,y), its distance from the z-axis normal to the plane is r, where r²=x²+y².',
      'Polar moment: Jₒ=∫r²dA.',
      'Substitute r²=x²+y²: Jₒ=∫x²dA+∫y²dA.',
      'By definition, ∫x²dA=Iᵧ and ∫y²dA=Iₓ.',
      'Hence Jₒ=Iₓ+Iᵧ, provided x and y lie in the plane and all three axes intersect at the same point.'
    ], answer:'Jₒ = Iₓ + Iᵧ', tip:'Condition is essential: mutually perpendicular axes through one common point.'},
    {id:'s-parallel-axis', rank:20, title:'Parallel-axis theorem — I = Ī + Ad²', group:'Part A · Area MOI', years:['2015 family','2018+'], source:'MOI slide + prepared notes', question:'Prove the transfer/parallel-axis formula for an area.', sketch:'lsection', steps:[
      'Let x̄ be a centroidal axis and x a parallel axis at distance d.',
      'For an element dA, write its distance from x as y=y′+d.',
      'Iₓ=∫(y′+d)²dA = ∫y′²dA + 2d∫y′dA + d²∫dA.',
      'Because x̄ passes through the centroid, ∫y′dA=0.',
      'Therefore Iₓ=Īₓ+Ad².'
    ], answer:'I = Ī + Ad² (area); for mass MOI, I = Ī + md².', tip:'The transfer distance d is always the perpendicular distance between parallel axes.'},
    {id:'s-friction-angle', rank:21, title:'Angle of friction vs angle of repose', group:'Part B · Friction', years:['2015','2016','2019','2024','Backlog 2023'], source:'Friction prepared note + QB', question:'Distinguish between angle of friction and angle of repose.', sketch:'incline', steps:[
      'Angle of friction φ: at limiting friction, the resultant reaction R is inclined to the normal N by φ.',
      'Since tanφ=F_lim/N and F_lim=μN, tanφ=μ.',
      'Angle of repose α: the inclination of a rough plane to the horizontal at which a body is just about to slide under its own weight.',
      'At impending slide on the plane, Wsinα=μWcosα, so tanα=μ.',
      'Therefore α=φ for the same pair of contact surfaces under limiting equilibrium.'
    ], answer:'tanφ=μ, tanα=μ ⇒ α=φ at limiting equilibrium.', tip:'Friction angle belongs to the reaction triangle; repose angle belongs to the inclined plane.'},
    {id:'s-catenary', rank:22, title:'Catenary — governing equation', group:'Part B · Flexible Cord', years:['2015','2021 family'], source:'Flexible Cord note + regular QB', question:'Show that a cable carrying only its own uniformly distributed weight forms a catenary.', sketch:'cable', steps:[
      'For a cable whose load is uniform per unit cable length, use the lowest point as origin and let H be the constant horizontal component of tension.',
      'For a cable element, vertical equilibrium relates the vertical tension component to the weight of cable length s.',
      'With tanθ=dy/dx and ds²=dx²+dy², the equilibrium differential equation integrates to the hyperbolic form.',
      'Writing k=H/w, the curve is y=k cosh(x/k) when the origin convention is chosen as in the course question; an equivalent vertically shifted form is y=k[cosh(x/k)−1] when y=0 is set at the lowest point.',
      'State the coordinate convention in the exam before giving the final expression.'
    ], answer:'Catenary form: y = k cosh(x/k), k=H/w (or the vertically shifted equivalent).', tip:'Parabola → load uniform per horizontal span; catenary → self-weight uniform per cable length.'},
    {id:'s-cg-cone-hole', rank:23, title:'Cone with cylindrical hole — center of gravity', group:'Part A · Centroid / C.G.', years:['2016'], source:'2016 regular QB; derived from standard composite-volume centroid method', question:'Solid cone D=20 in, h=30 in has a coaxial cylindrical hole d=8 in, depth=6 in from the base. Locate C.G.', sketch:'cone', steps:[
      'Use the base as reference. Treat the removed cylinder as negative volume; density cancels because the material is homogeneous.',
      'Cone: R=10 in, V₁=(1/3)πR²h=1000π in³; its centroid is h/4=7.5 in from the base.',
      'Hole: r=4 in, depth=6 in, V₂=πr²(6)=96π in³; its centroid is 3 in from the base.',
      'Remaining centroid: ȳ=(V₁y₁−V₂y₂)/(V₁−V₂).',
      'ȳ=[1000π(7.5)−96π(3)]/[904π]≈7.978 in from the base.'
    ], answer:'C.G. ≈ 7.98 in from the base along the geometric axis.', tip:'A hole is a negative area/volume/mass in centroid equations.'},
    {id:'s-chimney-work', rank:24, title:'Masonry chimney — work against gravity', group:'Part A · Work–Energy', years:['2016 family','2023'], source:'2023 regular QB; derived by integration', question:'Chimney h=450 ft, OD=22 ft, ID=14 ft, masonry weight density=100 lb/ft³. Find work against gravity during construction.', sketch:'cone', steps:[
      'Cross-sectional masonry area A=π/4(D²−d²)=π/4(22²−14²)=72π ft².',
      'A horizontal slice of thickness dy weighs dW=γA dy.',
      'To place that slice at elevation y requires dU=y·dW=γAy dy.',
      'Integrate from 0 to h: U=γA∫₀ʰy dy=γAh²/2.',
      'U=100(72π)(450²)/2≈2.290×10⁹ ft·lb.'
    ], answer:'Work ≈ 2.290×10⁹ ft·lb (≈1.157×10³ hp·h).', tip:'Do not multiply total weight by full height; the average lift height is h/2.'},
    {id:'s-jet', rank:25, title:'Jet/steam on fixed blade — impulse–momentum', group:'Part A · Impulse Momentum', years:['2015 family','2024 family'], source:'Impulse Momentum prepared note; values checked from the supplied example', question:'Steam flow rate Ẇ=1.5 lb/s enters a fixed frictionless blade at 500 ft/s and turns through 135°. Find force components on the blade.', sketch:'impulse', steps:[
      'Mass-flow rate in FPS units: ṁ=Ẇ/g=1.5/32.2 slug/s.',
      'Take inlet velocity V₁=(500,0) ft/s. A 135° turn gives outlet V₂=(−500cos45°,−500sin45°) ft/s.',
      'Force on fluid: F=ṁ(V₂−V₁). Thus Fₓ≈−39.76 lb and Fᵧ≈−16.47 lb.',
      'The force exerted by the fluid on the fixed blade is equal and opposite.',
      'Therefore the blade receives ≈39.76 lb to the right and ≈16.47 lb upward.'
    ], answer:'Force on blade ≈ (39.76 lb right, 16.47 lb up); resultant ≈43.03 lb.', tip:'Always distinguish “force on fluid” from “force on blade”; they are opposite.'}
  ],
  backlog: {
    title:'Backlog 2023 Dedicated Preparation',
    warning:'This area is intentionally separate from regular-exam preparation.',
    mapping:[
      {q:'Q1', topics:'FBD definitions + member FBD; wheel over block least force', action:'Master B1 definitions and the 547.42-lb least-force template.'},
      {q:'Q2', topics:'Beam reaction/SF/BM; pulley equilibrium', action:'Do B2 beam workflow plus all 3 prepared pulley routings.'},
      {q:'Q3', topics:'Belt friction proof; inverted Howe truss', action:'Memorize the derivation logic, not only formula; practice method of sections.'},
      {q:'Q4', topics:'Sliding vs tipping; wedge; angle friction vs repose', action:'Practice friction-direction logic and separate wedge/block FBDs.'},
      {q:'Q5', topics:'Centroid/C.G. theory; sector centroid; composite first moment', action:'A1 is a scoring set if the area table is clean.'},
      {q:'Q6', topics:'Area MOI applications; J=Ix+Iy; polar MOI and radius of gyration', action:'A2 formulas + parallel-axis method.'},
      {q:'Q7', topics:'Impulse-momentum proof; inclined block work', action:'A4 proof + work example included in solutions.'},
      {q:'Q8', topics:'Pappus-Guldinus surface/volume; angle friction/repose; horizontal impulse', action:'Revise Pappus theorem statements and impulse sign conventions.'}
    ],
    sevenDay:[
      'Day 1 — B1 FBD + equilibrium + wheel. Write definitions from memory twice.',
      'Day 2 — B2 Beam + pulley. Solve one beam from both left and right cuts.',
      'Day 3 — B3 Truss + B4 belt friction/wedge.',
      'Day 4 — A1 Centroid: theory, triangle/sector, composite area.',
      'Day 5 — A2 MOI: J theorem, parallel axis, composite MOI.',
      'Day 6 — A4 Work–Energy + Impulse proof and numericals; A3 Pappus quick revision.',
      'Day 7 — Full 3-hour mock: choose three questions from each printed section; mark units, diagrams and final answers.'
    ],
    examRules:[
      'Start every numerical with a clean sketch/FBD and known data.',
      'Box the governing equation before substitution.',
      'Carry units on every final quantity.',
      'If a sign is negative, explain the physical direction/nature instead of deleting the sign.',
      'For derivations, write assumptions/conditions before equations.',
      'Do not mix regular-priority statistics with backlog-only prediction.'
    ]
  },
  sourceLibrary: [
    {name:'Regular Question Bank 2015–2021', href:'downloads/question-papers/Regular_2015-2021.pdf', type:'Question Paper'},
    {name:'Regular Examination 2023', href:'downloads/question-papers/Regular_2023.pdf', type:'Question Paper'},
    {name:'Regular Question Bank 2024–2025', href:'downloads/question-papers/Regular_2024-2025.pdf', type:'Question Paper'},
    {name:'Backlog Examination 2023', href:'downloads/question-papers/Backlog_2023.pdf', type:'Backlog'},
    {name:'CE1201 Master Study Guide PDF', href:'downloads/CE1201_Master_Study_Guide.pdf', type:'Website PDF'}
  ]
};
