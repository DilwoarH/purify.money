import { forwardRef } from 'react'
import clsx from 'clsx'

function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 79 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2.4 12a9.004 9.004 0 0 0 6.055 8.507c1.565.542 2.945-.85 2.945-2.507V6c0-1.657-1.38-3.049-2.945-2.507A9.004 9.004 0 0 0 2.4 12Z"
        fill="#06B6D4"
      />
     <path d="M33.0043 17V6.81818H36.8224C37.6046 6.81818 38.2609 6.96401 38.7912 7.25568C39.3248 7.54735 39.7275 7.94839 39.9993 8.45881C40.2744 8.96591 40.4119 9.54261 40.4119 10.1889C40.4119 10.8419 40.2744 11.4219 39.9993 11.929C39.7242 12.4361 39.3182 12.8355 38.7812 13.1271C38.2443 13.4155 37.5831 13.5597 36.7976 13.5597H34.267V12.0433H36.549C37.0064 12.0433 37.3809 11.9638 37.6726 11.8047C37.9643 11.6456 38.1797 11.4268 38.3189 11.1484C38.4614 10.87 38.5327 10.5502 38.5327 10.1889C38.5327 9.82765 38.4614 9.50947 38.3189 9.23438C38.1797 8.95928 37.9626 8.7455 37.6676 8.59304C37.3759 8.43726 36.9998 8.35938 36.5391 8.35938H34.8487V17H33.0043ZM46.8017 13.7884V9.36364H48.6014V17H46.8564V15.6428H46.7768C46.6045 16.0703 46.3211 16.42 45.9267 16.6918C45.5356 16.9635 45.0533 17.0994 44.4799 17.0994C43.9795 17.0994 43.537 16.9884 43.1525 16.7663C42.7714 16.541 42.4731 16.2145 42.2576 15.7869C42.0422 15.3561 41.9345 14.8357 41.9345 14.2259V9.36364H43.7342V13.9474C43.7342 14.4313 43.8668 14.8158 44.1319 15.1009C44.3971 15.3859 44.7451 15.5284 45.176 15.5284C45.4411 15.5284 45.698 15.4638 45.9466 15.3345C46.1951 15.2053 46.399 15.013 46.5581 14.7578C46.7205 14.4993 46.8017 14.1761 46.8017 13.7884ZM50.4521 17V9.36364H52.1971V10.6364H52.2766C52.4158 10.1955 52.6545 9.85582 52.9925 9.61719C53.3339 9.37524 53.7234 9.25426 54.1609 9.25426C54.2603 9.25426 54.3713 9.25923 54.494 9.26918C54.6199 9.2758 54.7243 9.2874 54.8072 9.30398V10.9595C54.7309 10.933 54.61 10.9098 54.4442 10.8899C54.2818 10.8667 54.1244 10.8551 53.9719 10.8551C53.6438 10.8551 53.3488 10.9264 53.087 11.0689C52.8285 11.2081 52.6246 11.402 52.4755 11.6506C52.3263 11.8991 52.2518 12.1858 52.2518 12.5107V17H50.4521ZM56.0028 17V9.36364H57.8026V17H56.0028ZM56.9077 8.27983C56.6226 8.27983 56.3774 8.18537 56.1719 7.99645C55.9664 7.80421 55.8636 7.57386 55.8636 7.3054C55.8636 7.03362 55.9664 6.80327 56.1719 6.61435C56.3774 6.42211 56.6226 6.32599 56.9077 6.32599C57.196 6.32599 57.4413 6.42211 57.6435 6.61435C57.849 6.80327 57.9517 7.03362 57.9517 7.3054C57.9517 7.57386 57.849 7.80421 57.6435 7.99645C57.4413 8.18537 57.196 8.27983 56.9077 8.27983ZM63.5211 9.36364V10.7557H59.0069V9.36364H63.5211ZM60.1355 17V8.64276C60.1355 8.12902 60.2415 7.70147 60.4537 7.36008C60.6691 7.0187 60.9574 6.76349 61.3187 6.59446C61.68 6.42543 62.081 6.34091 62.5218 6.34091C62.8334 6.34091 63.1101 6.36577 63.3521 6.41548C63.594 6.4652 63.773 6.50994 63.889 6.54972L63.5311 7.94176C63.4548 7.91856 63.3587 7.89536 63.2427 7.87216C63.1267 7.84564 62.9975 7.83239 62.8549 7.83239C62.5202 7.83239 62.2832 7.91359 62.144 8.07599C62.0081 8.23508 61.9402 8.46378 61.9402 8.76207V17H60.1355ZM66.0492 19.8636C65.8039 19.8636 65.5769 19.8438 65.3681 19.804C65.1626 19.7675 64.9985 19.7244 64.8759 19.6747L65.2935 18.2727C65.5553 18.349 65.789 18.3854 65.9945 18.3821C66.2 18.3788 66.3806 18.3142 66.5364 18.1882C66.6955 18.0656 66.8297 17.8601 66.9391 17.5717L67.0932 17.1591L64.324 9.36364H66.2331L67.9931 15.1307H68.0726L69.8375 9.36364H71.7516L68.6941 17.9247C68.5516 18.3291 68.3626 18.6754 68.1273 18.9638C67.892 19.2554 67.6036 19.4775 67.2623 19.63C66.9242 19.7857 66.5198 19.8636 66.0492 19.8636Z" fill="white"/>
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <MenuIcon className="h-6 w-6 flex-none" />
        <Logo className="h-6 flex-none" />
        <UserIcon className="h-6 w-6 flex-none" />
      </div>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef<
  React.ElementRef<'div'>,
  { children: React.ReactNode }
>(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef<
  React.ElementRef<'div'>,
  { className?: string; children: React.ReactNode }
>(function AppScreenBody({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
    >
      {children}
    </div>
  )
})
