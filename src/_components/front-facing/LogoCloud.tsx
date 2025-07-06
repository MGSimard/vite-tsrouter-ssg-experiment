import { InfiniteSlider } from "@/_components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/_components/motion-primitives/progressive-blur";

export const LogoCloud = () => {
  return (
    <div className="max-w-8xl w-full mx-auto mt-auto">
      <p className="text-sm text-muted-foreground">Powering the best teams</p>
      <div className="relative py-6">
        <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
          <img
            className="mx-auto h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nvidia.svg"
            alt="Nvidia Logo"
            height="20"
            width="auto"
          />
          <img
            className="mx-auto h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/column.svg"
            alt="Column Logo"
            height="16"
            width="auto"
          />
          <img
            className="mx-auto h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/github.svg"
            alt="GitHub Logo"
            height="16"
            width="auto"
          />
          <img
            className="mx-auto h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/nike.svg"
            alt="Nike Logo"
            height="20"
            width="auto"
          />
          <img
            className="mx-auto h-5 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
            alt="Lemon Squeezy Logo"
            height="20"
            width="auto"
          />
          <img
            className="mx-auto h-4 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/laravel.svg"
            alt="Laravel Logo"
            height="16"
            width="auto"
          />
          <img
            className="mx-auto h-7 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/lilly.svg"
            alt="Lilly Logo"
            height="28"
            width="auto"
          />
          <img
            className="mx-auto h-6 w-fit dark:invert"
            src="https://html.tailus.io/blocks/customers/openai.svg"
            alt="OpenAI Logo"
            height="24"
            width="auto"
          />
        </InfiniteSlider>
        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
        <ProgressiveBlur
          className="pointer-events-none absolute left-0 top-0 h-full w-20"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute right-0 top-0 h-full w-20"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </div>
  );
};
