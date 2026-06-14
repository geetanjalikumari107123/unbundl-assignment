import Button from "../Button/Button";

export default function FooterCTA() {
  return (
    <div className="fixed bottom-0 left-0 z-50 hidden w-full border-t border-[#E5E5E5] bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:block">
      <div className="mx-auto flex items-center justify-between gap-4 md:px-25">
        <p className="text-[20px] font-semibold text-gray-900 whitespace-nowrap">
          Ready for your perfect smile?
        </p>

        <div className="flex gap-4">
          <Button
            className="px-10 whitespace-nowrap"
            buttonHeight="h-12"
          >
            Book scan at Home
          </Button>

          <button
            type="button"
            className="rounded-lg border border-[#D8D8D8] bg-[#F5F3FA] px-10 py-3 text-[16px] font-semibold text-gray-900 whitespace-nowrap"
          >
            Book scan at Clinic
          </button>
        </div>
      </div>
    </div>
  );
}