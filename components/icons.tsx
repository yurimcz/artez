
import React from 'react';

type IconProps = {
  className?: string;
};

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const BehanceIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6H10V8H14V6M16.5 9H10V11H16.5C17.3 11 18 10.3 18 9.5C18 8.7 17.3 8 16.5 9M20.4 5.6C20.6 5.8 20.7 6.1 20.7 6.4V17.6C20.7 17.9 20.6 18.2 20.4 18.4S20.1 18.7 19.8 18.7H4.2C3.9 18.7 3.6 18.6 3.4 18.4S3 17.9 3 17.6V6.4C3 6.1 3.1 5.8 3.3 5.6S3.9 5.3 4.2 5.3H19.8C20.1 5.3 20.2 5.4 20.4 5.6M16.5 12H10.8V15H16.2C17.3 15 18 14.1 18 13.3C18 12.4 17.3 11.9 16.5 12Z"></path>
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
