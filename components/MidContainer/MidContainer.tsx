import { IMidContainer } from 'types/components';
import Image from 'next/image';

export const MidContainer: React.FC<IMidContainer> = (props): JSX.Element => {
  const { children } = props;
  return (
    <div className="h-screen w-screen flex flex-row">
      <div className="flex w-2/4">{children}</div>
      <div className="flex w-2/4 px-12 bg-gradient-to-r from-indigo-700 to-indigo-500">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="pb-8">
            <Image
              height={60}
              width={60}
              alt="logo"
              src="/statics/images/logo-example.svg"
            />
          </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white text-center">
            <span className="block">Data to enrich your</span>
            <span className="block">online business</span>
          </h1>
          <p className="mt-8 text-sm text-white opacity-70 text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};
