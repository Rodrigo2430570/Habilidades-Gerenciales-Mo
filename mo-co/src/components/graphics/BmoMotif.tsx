type Variant = 'card' | 'commitment' | 'collaboration' | 'editorial';

export function BmoMotif({ variant }: { variant: Variant }) {
  if (variant === 'card') return <svg className="bmo-motif bmo-motif--card" viewBox="0 0 620 400" fill="none" aria-hidden="true" focusable="false">
    <path d="M53 315h112m-56-56v112" stroke="var(--signal)" strokeWidth="34" strokeLinecap="round" />
    <path d="M85 71h232c20 0 36 16 36 36v139c0 20-16 36-36 36H85c-20 0-36-16-36-36V107c0-20 16-36 36-36Z" fill="var(--mint)" stroke="var(--green)" strokeWidth="7" />
    <circle cx="149" cy="164" r="11" fill="var(--ink)" /><circle cx="253" cy="164" r="11" fill="var(--ink)" />
    <path d="M169 203c19 23 45 23 64 0" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round" />
    <path d="M355 115h94v62h61m-155 57h137m-139 62h79" stroke="var(--green)" strokeWidth="5" strokeLinecap="round" />
    <circle cx="526" cy="177" r="29" fill="var(--signal)" stroke="var(--ink)" strokeWidth="5" />
    <circle cx="505" cy="234" r="18" fill="var(--green)" />
    <circle cx="450" cy="297" r="29" fill="#df7066" stroke="var(--ink)" strokeWidth="5" />
    <path d="m550 279 28 48h-56l28-48Z" fill="#7eb8c1" stroke="var(--ink)" strokeWidth="5" strokeLinejoin="round" />
  </svg>;

  if (variant === 'commitment') return <svg className="bmo-motif bmo-motif--commitment" viewBox="0 0 700 560" fill="none" aria-hidden="true" focusable="false">
    <path d="M96 360h150m-75-75v150" stroke="var(--signal)" strokeWidth="42" strokeLinecap="round" />
    <path d="M101 74h249c25 0 45 20 45 45v142c0 25-20 45-45 45H101c-25 0-45-20-45-45V119c0-25 20-45 45-45Z" fill="var(--mint)" stroke="var(--green)" strokeWidth="8" />
    <circle cx="164" cy="173" r="12" fill="var(--ink)" /><circle cx="284" cy="173" r="12" fill="var(--ink)" />
    <path d="M188 224c23 21 49 21 72 0" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round" />
    <path d="M396 145h120m-120 84h190m-185 122h111m-116 87h190" stroke="var(--green)" strokeWidth="5" strokeLinecap="round" />
    <path d="m523 143 14 15 29-37m22 108 13 14 30-36m-113 143 13 14 30-36" stroke="var(--green)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="604" cy="439" r="31" fill="#df7066" stroke="var(--ink)" strokeWidth="6" />
    <circle cx="348" cy="447" r="21" fill="var(--green)" />
    <path d="m286 496 24-40 24 40h-48Z" fill="#7eb8c1" stroke="var(--ink)" strokeWidth="5" strokeLinejoin="round" />
  </svg>;

  if (variant === 'collaboration') return <svg className="bmo-motif bmo-motif--collaboration" viewBox="0 0 1200 500" fill="none" aria-hidden="true" focusable="false">
    <path d="M285 250h215m200 0h225" stroke="var(--green)" strokeWidth="5" strokeDasharray="13 18" strokeLinecap="round" />
    <path d="M75 125h170c27 0 48 21 48 48v148c0 27-21 48-48 48H75c-27 0-48-21-48-48V173c0-27 21-48 48-48Z" fill="var(--mint)" stroke="var(--green)" strokeWidth="8" />
    <circle cx="113" cy="217" r="12" fill="var(--ink)" /><circle cx="209" cy="217" r="12" fill="var(--ink)" /><path d="M122 270c24 20 51 20 75 0" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round" />
    <path d="M544 243h113m-56-56v113" stroke="var(--signal)" strokeWidth="46" strokeLinecap="round" />
    <circle cx="1000" cy="150" r="39" fill="#df7066" stroke="var(--ink)" strokeWidth="7" />
    <circle cx="1104" cy="253" r="29" fill="var(--green)" />
    <path d="m982 326 43 74h-86l43-74Z" fill="#7eb8c1" stroke="var(--ink)" strokeWidth="7" strokeLinejoin="round" />
    <path d="M994 189v52h75m-83 87v-53h80" stroke="var(--green)" strokeWidth="5" strokeLinecap="round" />
    <circle cx="320" cy="250" r="7" fill="var(--green)" /><circle cx="874" cy="250" r="7" fill="var(--green)" />
  </svg>;

  return <svg className="bmo-motif bmo-motif--editorial" viewBox="0 0 900 620" fill="none" aria-hidden="true" focusable="false">
    <path d="M89 419h196m-98-98v196" stroke="var(--signal)" strokeWidth="54" strokeLinecap="round" />
    <path d="M315 94h336c36 0 65 29 65 65v236c0 36-29 65-65 65H315c-36 0-65-29-65-65V159c0-36 29-65 65-65Z" fill="var(--paper)" stroke="var(--green)" strokeWidth="10" />
    <circle cx="390" cy="236" r="15" fill="var(--ink)" /><circle cx="570" cy="236" r="15" fill="var(--ink)" />
    <path d="M421 312c35 33 82 33 117 0" stroke="var(--ink)" strokeWidth="11" strokeLinecap="round" />
    <path d="M747 173h75m-80 85h95M705 475h117" stroke="var(--green)" strokeWidth="6" strokeLinecap="round" />
    <circle cx="788" cy="374" r="35" fill="#df7066" stroke="var(--ink)" strokeWidth="7" />
    <circle cx="70" cy="139" r="25" fill="var(--green)" />
    <path d="m450 502 35 61h-70l35-61Z" fill="#7eb8c1" stroke="var(--ink)" strokeWidth="6" strokeLinejoin="round" />
    <circle cx="596" cy="538" r="26" fill="var(--green)" />
    <path d="M110 139h103m596 0v-67M600 492v-34" stroke="var(--green)" strokeWidth="5" strokeLinecap="round" />
  </svg>;
}
