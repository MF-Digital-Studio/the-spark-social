import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MissionIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Dış Sarı Çember */}
      <circle 
        cx="12" 
        cy="12" 
        r="11" 
        stroke="#ffca00" 
        strokeWidth="1" 
      />

      <mask id="mission-arrow-mask">
        <rect x="0" y="0" width="24" height="24" fill="white" />
        {/* Ok şaftının geçtiği yerleri maskeliyoruz (kırmızı halkalarda boşluk yaratmak için) */}
        <line x1="18.5" y1="5.5" x2="10.5" y2="13.5" stroke="black" strokeWidth="3" strokeLinecap="round" />
      </mask>

      {/* Hedef Halkaları (Maskelenmiş) */}
      <g mask="url(#mission-arrow-mask)">
        <circle cx="10.5" cy="13.5" r="2.5" stroke="#FF0000" strokeWidth="1.2" />
        <circle cx="10.5" cy="13.5" r="5.5" stroke="#FF0000" strokeWidth="1.2" />
      </g>

      {/* Merkez Noktası */}
      <circle cx="10.5" cy="13.5" r="0.75" fill="#FF0000" />

      {/* Ok (Arrow) */}
      <g stroke="#FF0000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Şaft */}
        <line x1="17.5" y1="6.5" x2="10.5" y2="13.5" />
        {/* Ok ucu (Arrowhead) */}
        <polyline points="10.5 10.5 10.5 13.5 13.5 13.5" />
        {/* Tüyler (Feathers) */}
        <line x1="15.5" y1="6.5" x2="17.5" y2="8.5" />
        <line x1="16.5" y1="5.5" x2="18.5" y2="7.5" />
      </g>
    </svg>
  );
};

export const VisionIcon: React.FC<IconProps> = ({ size = 44, className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Dış Sarı Çember */}
      <circle 
        cx="12" 
        cy="12" 
        r="11" 
        stroke="#ffca00" 
        strokeWidth="1" 
      />

      {/* Göz Formu */}
      <path 
        d="M 5 12 C 8.5 7.5, 15.5 7.5, 19 12 C 15.5 16.5, 8.5 16.5, 5 12 Z" 
        stroke="#FF0000" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Göz Bebeği Dış Çemberi */}
      <circle 
        cx="12" 
        cy="12" 
        r="2.5" 
        stroke="#FF0000" 
        strokeWidth="1.2" 
      />
      
      {/* Göz Bebeği Merkez Noktası */}
      <circle 
        cx="12" 
        cy="12" 
        r="0.75" 
        fill="#FF0000" 
      />
    </svg>
  );
};
