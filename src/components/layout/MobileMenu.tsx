import { Fragment, useRef, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { siteNav, headerCta } from "../../lib/navigation";

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

/** Bottone + drawer di navigazione mobile. Idratato solo sotto i 768px. */
function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        type="button"
        className="touch-target text-ink rounded-xl md:hidden"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Apri menu</span>
        <MenuIcon className="h-7 w-7" />
      </button>

      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-60 md:hidden"
          onClose={() => setOpen(false)}
          initialFocus={closeButtonRef}
        >
          <TransitionChild
            as={Fragment}
            enter="drawer-backdrop-enter duration-[420ms]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="drawer-backdrop-enter duration-[300ms]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="bg-hero/40 fixed inset-0 backdrop-blur-sm"
              aria-hidden="true"
            />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                <TransitionChild
                  as={Fragment}
                  enter="drawer-panel-enter duration-[420ms]"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="drawer-panel-enter duration-[300ms]"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel
                    id="mobile-menu"
                    aria-labelledby="mobile-menu-title"
                    className="mobile-drawer bg-surface pointer-events-auto flex w-screen max-w-xs flex-col shadow-2xl"
                  >
                    <div className="border-line/70 flex items-center justify-between border-b px-6 py-4">
                      <DialogTitle
                        id="mobile-menu-title"
                        className="font-display text-ink text-lg font-bold"
                      >
                        Menu
                      </DialogTitle>
                      <button
                        ref={closeButtonRef}
                        type="button"
                        className="touch-target text-ink rounded-xl"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Chiudi menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden />
                      </button>
                    </div>

                    <nav
                      className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-6"
                      aria-label="Navigazione mobile"
                    >
                      {siteNav.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="drawer-link"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </a>
                      ))}
                      <a
                        href={headerCta.href}
                        download={headerCta.download}
                        className="btn-primary mt-4 w-full"
                        onClick={() => setOpen(false)}
                      >
                        {headerCta.label}
                      </a>
                    </nav>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MobileMenu;
