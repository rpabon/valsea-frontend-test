export function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}
