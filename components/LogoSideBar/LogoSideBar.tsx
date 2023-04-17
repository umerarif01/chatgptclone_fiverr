import React from 'react';

const LogoSideBar = () => {
  let imgurl = process.env.NEXT_PUBLIC_LOGOURL;

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0 ${'hidden md:block'}`}
      >
        {imgurl ? (
          <img src={imgurl} />
        ) : (
          <p className="bg-white py-6 px-4 m-4 text-black font-semibold flex justify-center">
            Logo Here
          </p>
        )}
      </div>
    </>
  );
};

export default LogoSideBar;
