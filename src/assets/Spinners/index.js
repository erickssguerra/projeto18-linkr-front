import { ThreeDots, RotatingLines, TailSpin } from "react-loader-spinner";

export const loadingButton = (
  <ThreeDots
    height="50"
    width="50"
    radius="4"
    color="white"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

export const loadingPage = <RotatingLines strokeColor="#568259" width="100" />;

export const loadingTrending = (
  <TailSpin
    height="80"
    width="80"
    color="#FFFFFF"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
);
