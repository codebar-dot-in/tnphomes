const PHONE = '+917708668707'
const WA_LINK = `https://wa.me/917708668707?text=Hi%20TNP%20Homes%2C%20I%20need%20details%20for%20my%20construction%20project.`

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className="h-6 w-6">
      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.6 4.47 1.64 6.36L3 29l6.82-1.6A13 13 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.5a10.44 10.44 0 0 1-5.33-1.46l-.38-.23-3.97.93.95-3.87-.25-.4A10.44 10.44 0 0 1 5.5 16C5.5 10.2 10.2 5.5 16 5.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5zm5.73-7.77c-.31-.16-1.84-.9-2.13-1.01-.28-.1-.49-.15-.69.16-.2.31-.79 1.01-.97 1.22-.18.2-.35.23-.66.08-.31-.16-1.3-.48-2.48-1.53-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.51.1-.2.05-.38-.03-.54-.08-.16-.69-1.67-.95-2.28-.25-.6-.5-.52-.69-.53H9.8c-.18 0-.48.07-.73.36-.25.28-.97.95-.97 2.32s1 2.69 1.13 2.87c.14.18 1.96 3 4.75 4.2.66.29 1.18.46 1.58.59.66.21 1.27.18 1.74.11.53-.08 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.47-.07-.13-.27-.2-.58-.36z" />
    </svg>
  )
}

function IPhoneCallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02L6.62 10.79z" />
    </svg>
  )
}

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1ebe5d] hover:scale-105"
        style={{ width: '52px', height: '52px' }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a
        href={`tel:${PHONE}`}
        className="inline-flex items-center justify-center rounded-full bg-[#007AFF] text-white shadow-lg transition hover:bg-[#0066dd] hover:scale-105"
        style={{ width: '52px', height: '52px' }}
        aria-label="Call TNP Homes"
      >
        <IPhoneCallIcon />
      </a>
    </div>
  )
}
