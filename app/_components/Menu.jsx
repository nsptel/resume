'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScrollTo } from '@/_hooks';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MENU_OPTIONS, SITE_ROUTES, SITE_STRINGS } from '@/_constants';

export function Menu({ isMobile = false, onClick = () => {} }) {
  const pathname = usePathname();
  const { scrollToEl } = useScrollTo();

  const sortAscending = (a, b) => a.id - b.id;

  const handleOnClick = (e) => {
    scrollToEl(e);
    window.setTimeout(() => onClick(), 350);
  };

  const mainMenu = (
    <ul
      tabIndex={0}
      className={
        (isMobile
          ? 'menu menu-sm dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-52 p-2 shadow'
          : 'flex justify-center gap-5 flex-col md:flex-row items-start md:items-center') +
        ' border-primary'
      }
    >
      {MENU_OPTIONS.sort(sortAscending).map((menuItem) => (
        <li key={menuItem.id}>
          <a
            href={menuItem.url}
            title={menuItem.name}
            onClick={handleOnClick}
            className={
              (isMobile
                ? ''
                : 'after:absolute after:left-0 after:-bottom-[3px] after:h-[2px] after:w-0 after:bg-current after:transition-width after:duration-300 after:ease-in-out hover:after:w-full') +
              ' relative text-lg hover:text-primary hover:no-underline'
            }
          >
            {menuItem.name}
          </a>
        </li>
      ))}
    </ul>
  );

  const backMenu = (
    <div>
      <Link
        href={SITE_ROUTES.home}
        title={SITE_STRINGS.backToMainPageTitle}
        className="icon-link-btn"
      >
        <span>
          <BsArrowReturnLeft />
        </span>
        {SITE_STRINGS.backToMainText}
      </Link>
    </div>
  );

  const content = pathname === SITE_ROUTES.projects ? backMenu : mainMenu;

  if (MENU_OPTIONS.length === 0) {
    return null;
  }

  return <>{content}</>;
}
