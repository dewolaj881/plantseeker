export default function Error({text = 'Wystąpił błąd podczas wczytywania bazy!'}) {
  return (
    <div className="flex justify-center items-center mt-56">
      <button type="button" className="text-white text-3xl flex justify-center" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        {text}
      </button>
    </div>
  );
}
