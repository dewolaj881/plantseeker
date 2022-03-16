import {Disclosure} from '@headlessui/react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const navigation = [
  {name: 'Strona główna', href: '/'},
  {name: 'Dbaj o rośliny', href: '/explore.html'},
  {name: 'Panel administratora', href: 'https://cfgpanel.herokuapp.com/'}
];

export default function Nav({current}) {
  return (
    <Disclosure as="nav" className="bg-main">
      {({open}) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Otwórz menu główne</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <Link href="/">
                  <div className="flex-shrink-0 flex items-center cursor-pointer">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/plants/img/leaf.png"
                      alt="PlantSeeker logo"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/plants/img/leaf.png"
                      alt="PlantSeeker logo"
                    />
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                      >
                        <a
                          className={classNames(
                            current === item.name ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={current === item.name ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    passHref={true}
                  >
                    <Disclosure.Button
                      as="a"
                      className={classNames(
                        item.current ? 'bg-green-900 text-white' : 'text-green-300 hover:bg-green-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
