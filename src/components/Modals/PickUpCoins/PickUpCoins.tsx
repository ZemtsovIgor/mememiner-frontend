import React from "react";
import {Button} from "../../../elements";
import {PickUpCoinsStyle} from "./PickUpCoins.styles"
import {connect} from "react-redux";
import {AppStateType} from "../../../store";
import {getPickUpCoins} from "../../../store/wallet/actions";
import {closeModal} from "../../../store/app/actions";

interface Props {
  closeModal: () => void;
  getPickUpCoins: (payload: any) => void;
  title: string;
  amount: number;
}

const PickUpCoins: React.FC<Props> = (props: Props) => {
  const {closeModal, getPickUpCoins} = props;

  return (
    <PickUpCoinsStyle>
      <span className="pickUpCoins-title">Пока вас не было, вы заработали</span>
      <div className="pickUpCoins-icon">
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_62_183)">
            <circle cx="36" cy="32" r="32" fill="url(#paint0_linear_62_183)"/>
            <circle cx="36" cy="32" r="30.1176" fill="url(#paint1_linear_62_183)"/>
            <circle cx="36" cy="32" r="30.1176" fill="url(#paint2_radial_62_183)"/>
            <circle cx="36" cy="32" r="27.2941" fill="url(#paint3_linear_62_183)"/>
            <g filter="url(#filter1_i_62_183)">
              <circle cx="36" cy="32" r="18.8235" fill="url(#paint4_linear_62_183)"/>
            </g>
            <circle cx="36" cy="32.9412" r="17.8824" fill="url(#paint5_linear_62_183)"/>
            <g filter="url(#filter2_d_62_183)">
              <path
                d="M35.9118 42.8088C34.2549 42.8088 32.8137 42.5833 31.5882 42.1324C30.3726 41.6716 29.4167 41.0049 28.7206 40.1324C28.0245 39.2598 27.6324 38.2059 27.5441 36.9706L27.5294 36.7647H32.1765L32.2059 36.8971C32.3039 37.3284 32.5 37.701 32.7941 38.0147C33.098 38.3284 33.5196 38.5686 34.0588 38.7353C34.6079 38.902 35.2843 38.9853 36.0882 38.9853C36.8529 38.9853 37.4853 38.9069 37.9853 38.75C38.4853 38.5833 38.8579 38.3529 39.1029 38.0588C39.348 37.7647 39.4706 37.4118 39.4706 37V36.9853C39.4706 36.4363 39.2549 36.0049 38.8235 35.6912C38.402 35.3677 37.6079 35.0931 36.4412 34.8677L33.8088 34.3382C32.4559 34.0735 31.3235 33.6814 30.4118 33.1618C29.5098 32.6324 28.8333 31.9755 28.3824 31.1912C27.9412 30.3971 27.7206 29.4608 27.7206 28.3824V28.3529C27.7206 27.1177 28.0539 26.0392 28.7206 25.1177C29.3971 24.1863 30.3431 23.4706 31.5588 22.9706C32.7745 22.4608 34.1863 22.2059 35.7941 22.2059C37.4412 22.2059 38.8579 22.4314 40.0441 22.8824C41.2402 23.3333 42.1765 23.9951 42.8529 24.8677C43.5392 25.7402 43.9412 26.8039 44.0588 28.0588L44.0735 28.3382H39.4265L39.3971 28.2059C39.3088 27.7157 39.1128 27.3137 38.8088 27C38.5147 26.6765 38.1177 26.4363 37.6177 26.2794C37.1177 26.1127 36.5098 26.0294 35.7941 26.0294C35.098 26.0294 34.5147 26.1127 34.0441 26.2794C33.5833 26.4363 33.2353 26.6569 33 26.9412C32.7647 27.2255 32.6471 27.5588 32.6471 27.9412V27.9559C32.6471 28.3088 32.7402 28.6226 32.9265 28.8971C33.1128 29.1618 33.4118 29.3922 33.8235 29.5882C34.2353 29.7745 34.7794 29.9412 35.4559 30.0882L38.1618 30.6177C40.2892 31.0392 41.8579 31.7108 42.8677 32.6324C43.8873 33.5539 44.3971 34.8186 44.3971 36.4265V36.4559C44.3971 37.7892 44.0441 38.9314 43.3382 39.8824C42.6422 40.8235 41.6569 41.549 40.3824 42.0588C39.1079 42.5588 37.6177 42.8088 35.9118 42.8088ZM35.3235 45.25V19.7647H36.6324V45.25H35.3235Z"
                fill="url(#paint6_linear_62_183)"/>
            </g>
            <path
              d="M35.9264 41.8676C34.2696 41.8676 32.8284 41.6422 31.6029 41.1912C30.3872 40.7304 29.4313 40.0637 28.7352 39.1912C28.0392 38.3186 27.647 37.2647 27.5588 36.0294L27.5441 35.8235H32.1911L32.2205 35.9559C32.3186 36.3873 32.5147 36.7598 32.8088 37.0735C33.1127 37.3873 33.5343 37.6275 34.0735 37.7941C34.6225 37.9608 35.299 38.0441 36.1029 38.0441C36.8676 38.0441 37.4999 37.9657 37.9999 37.8088C38.4999 37.6422 38.8725 37.4118 39.1176 37.1176C39.3627 36.8235 39.4852 36.4706 39.4852 36.0588V36.0441C39.4852 35.4951 39.2696 35.0637 38.8382 34.75C38.4166 34.4265 37.6225 34.152 36.4558 33.9265L33.8235 33.3971C32.4705 33.1324 31.3382 32.7402 30.4264 32.2206C29.5245 31.6912 28.848 31.0343 28.397 30.25C27.9558 29.4559 27.7352 28.5196 27.7352 27.4412V27.4118C27.7352 26.1765 28.0686 25.098 28.7352 24.1765C29.4117 23.2451 30.3578 22.5294 31.5735 22.0294C32.7892 21.5196 34.2009 21.2647 35.8088 21.2647C37.4558 21.2647 38.8725 21.4902 40.0588 21.9412C41.2549 22.3922 42.1911 23.0539 42.8676 23.9265C43.5539 24.799 43.9558 25.8627 44.0735 27.1177L44.0882 27.3971H39.4411L39.4117 27.2647C39.3235 26.7745 39.1274 26.3726 38.8235 26.0588C38.5294 25.7353 38.1323 25.4951 37.6323 25.3382C37.1323 25.1716 36.5245 25.0882 35.8088 25.0882C35.1127 25.0882 34.5294 25.1716 34.0588 25.3382C33.598 25.4951 33.2499 25.7157 33.0147 26C32.7794 26.2843 32.6617 26.6176 32.6617 27V27.0147C32.6617 27.3677 32.7549 27.6814 32.9411 27.9559C33.1274 28.2206 33.4264 28.451 33.8382 28.6471C34.2499 28.8333 34.7941 29 35.4705 29.1471L38.1764 29.6765C40.3039 30.098 41.8725 30.7696 42.8823 31.6912C43.9019 32.6127 44.4117 33.8775 44.4117 35.4853V35.5147C44.4117 36.848 44.0588 37.9902 43.3529 38.9412C42.6568 39.8824 41.6715 40.6078 40.397 41.1176C39.1225 41.6176 37.6323 41.8676 35.9264 41.8676ZM35.3382 44.3088V18.8235H36.647V44.3088H35.3382Z"
              fill="url(#paint7_linear_62_183)"/>
            <path
              d="M35.9264 42.0441C34.2696 42.0441 32.8284 41.8186 31.6029 41.3676C30.3872 40.9069 29.4313 40.2402 28.7352 39.3676C28.0392 38.4951 27.647 37.4412 27.5588 36.2059L27.5441 36H32.1911L32.2205 36.1324C32.3186 36.5637 32.5147 36.9363 32.8088 37.25C33.1127 37.5637 33.5343 37.8039 34.0735 37.9706C34.6225 38.1373 35.299 38.2206 36.1029 38.2206C36.8676 38.2206 37.4999 38.1422 37.9999 37.9853C38.4999 37.8186 38.8725 37.5882 39.1176 37.2941C39.3627 37 39.4852 36.6471 39.4852 36.2353V36.2206C39.4852 35.6716 39.2696 35.2402 38.8382 34.9265C38.4166 34.6029 37.6225 34.3284 36.4558 34.1029L33.8235 33.5735C32.4705 33.3088 31.3382 32.9167 30.4264 32.3971C29.5245 31.8676 28.848 31.2108 28.397 30.4265C27.9558 29.6324 27.7352 28.6961 27.7352 27.6176V27.5882C27.7352 26.3529 28.0686 25.2745 28.7352 24.3529C29.4117 23.4216 30.3578 22.7059 31.5735 22.2059C32.7892 21.6961 34.2009 21.4412 35.8088 21.4412C37.4558 21.4412 38.8725 21.6667 40.0588 22.1176C41.2549 22.5686 42.1911 23.2304 42.8676 24.1029C43.5539 24.9755 43.9558 26.0392 44.0735 27.2941L44.0882 27.5735H39.4411L39.4117 27.4412C39.3235 26.951 39.1274 26.549 38.8235 26.2353C38.5294 25.9118 38.1323 25.6716 37.6323 25.5147C37.1323 25.348 36.5245 25.2647 35.8088 25.2647C35.1127 25.2647 34.5294 25.348 34.0588 25.5147C33.598 25.6716 33.2499 25.8922 33.0147 26.1765C32.7794 26.4608 32.6617 26.7941 32.6617 27.1765V27.1912C32.6617 27.5441 32.7549 27.8578 32.9411 28.1324C33.1274 28.3971 33.4264 28.6275 33.8382 28.8235C34.2499 29.0098 34.7941 29.1765 35.4705 29.3235L38.1764 29.8529C40.3039 30.2745 41.8725 30.9461 42.8823 31.8676C43.9019 32.7892 44.4117 34.0539 44.4117 35.6618V35.6912C44.4117 37.0245 44.0588 38.1667 43.3529 39.1176C42.6568 40.0588 41.6715 40.7843 40.397 41.2941C39.1225 41.7941 37.6323 42.0441 35.9264 42.0441ZM35.3382 44.4853V19H36.647V44.4853H35.3382Z"
              fill="url(#paint8_linear_62_183)"/>
            <g filter="url(#filter3_i_62_183)">
              <path
                d="M35.9264 42.0441C34.2696 42.0441 32.8284 41.8186 31.6029 41.3676C30.3872 40.9069 29.4313 40.2402 28.7352 39.3676C28.0392 38.4951 27.647 37.4412 27.5588 36.2059L27.5441 36H32.1911L32.2205 36.1324C32.3186 36.5637 32.5147 36.9363 32.8088 37.25C33.1127 37.5637 33.5343 37.8039 34.0735 37.9706C34.6225 38.1373 35.299 38.2206 36.1029 38.2206C36.8676 38.2206 37.4999 38.1422 37.9999 37.9853C38.4999 37.8186 38.8725 37.5882 39.1176 37.2941C39.3627 37 39.4852 36.6471 39.4852 36.2353V36.2206C39.4852 35.6716 39.2696 35.2402 38.8382 34.9265C38.4166 34.6029 37.6225 34.3284 36.4558 34.1029L33.8235 33.5735C32.4705 33.3088 31.3382 32.9167 30.4264 32.3971C29.5245 31.8676 28.848 31.2108 28.397 30.4265C27.9558 29.6324 27.7352 28.6961 27.7352 27.6176V27.5882C27.7352 26.3529 28.0686 25.2745 28.7352 24.3529C29.4117 23.4216 30.3578 22.7059 31.5735 22.2059C32.7892 21.6961 34.2009 21.4412 35.8088 21.4412C37.4558 21.4412 38.8725 21.6667 40.0588 22.1176C41.2549 22.5686 42.1911 23.2304 42.8676 24.1029C43.5539 24.9755 43.9558 26.0392 44.0735 27.2941L44.0882 27.5735H39.4411L39.4117 27.4412C39.3235 26.951 39.1274 26.549 38.8235 26.2353C38.5294 25.9118 38.1323 25.6716 37.6323 25.5147C37.1323 25.348 36.5245 25.2647 35.8088 25.2647C35.1127 25.2647 34.5294 25.348 34.0588 25.5147C33.598 25.6716 33.2499 25.8922 33.0147 26.1765C32.7794 26.4608 32.6617 26.7941 32.6617 27.1765V27.1912C32.6617 27.5441 32.7549 27.8578 32.9411 28.1324C33.1274 28.3971 33.4264 28.6275 33.8382 28.8235C34.2499 29.0098 34.7941 29.1765 35.4705 29.3235L38.1764 29.8529C40.3039 30.2745 41.8725 30.9461 42.8823 31.8676C43.9019 32.7892 44.4117 34.0539 44.4117 35.6618V35.6912C44.4117 37.0245 44.0588 38.1667 43.3529 39.1176C42.6568 40.0588 41.6715 40.7843 40.397 41.2941C39.1225 41.7941 37.6323 42.0441 35.9264 42.0441ZM35.3382 44.4853V19H36.647V44.4853H35.3382Z"
                fill="url(#paint9_linear_62_183)"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_62_183" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_183"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_183" result="shape"/>
            </filter>
            <filter id="filter1_i_62_183" x="17.1765" y="13.1765" width="37.6471" height="41.6471"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.415686 0 0 0 0 0.0196078 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_183"/>
            </filter>
            <filter id="filter2_d_62_183" x="27.5294" y="19.7647" width="16.8677" height="26.4853"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="1"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.745098 0 0 0 0 0.305882 0 0 0 0 0.0196078 0 0 0 1 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_62_183"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_62_183" result="shape"/>
            </filter>
            <filter id="filter3_i_62_183" x="27.5441" y="19" width="16.8677" height="25.4853"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                             result="hardAlpha"/>
              <feOffset dy="1"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.964706 0 0 0 0 0.709804 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_183"/>
            </filter>
            <linearGradient id="paint0_linear_62_183" x1="36" y1="0" x2="36" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#AC160C"/>
              <stop offset="1" stopColor="#C35F02"/>
            </linearGradient>
            <linearGradient id="paint1_linear_62_183" x1="36" y1="1.88235" x2="36" y2="62.1176"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDF645"/>
              <stop offset="1" stopColor="#FEC300"/>
            </linearGradient>
            <radialGradient id="paint2_radial_62_183" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(43.5294 8.94118) rotate(98.0591) scale(53.7069)">
              <stop offset="0.47714" stopColor="white" stopOpacity="0.64"/>
              <stop offset="0.926691" stopColor="#FE2E00" stopOpacity="0.16"/>
            </radialGradient>
            <linearGradient id="paint3_linear_62_183" x1="36" y1="4.70589" x2="36" y2="59.2941"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDF645"/>
              <stop offset="1" stopColor="#FEC300"/>
            </linearGradient>
            <linearGradient id="paint4_linear_62_183" x1="36" y1="13.1765" x2="36" y2="50.8235"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBCA05"/>
              <stop offset="1" stopColor="#FDB103"/>
            </linearGradient>
            <linearGradient id="paint5_linear_62_183" x1="36" y1="15.0588" x2="36" y2="50.8235"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBCA05"/>
              <stop offset="1" stopColor="#FD8A03"/>
            </linearGradient>
            <linearGradient id="paint6_linear_62_183" x1="35.9632" y1="19.7647" x2="35.9632" y2="45.25"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#AC160C"/>
              <stop offset="1" stopColor="#C35F02"/>
            </linearGradient>
            <linearGradient id="paint7_linear_62_183" x1="35.9999" y1="20.5294" x2="35.9999" y2="43.1176"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white"/>
            </linearGradient>
            <linearGradient id="paint8_linear_62_183" x1="35.9999" y1="20.7059" x2="35.9999" y2="43.2941"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDF645"/>
              <stop offset="1" stopColor="#FED811"/>
            </linearGradient>
            <linearGradient id="paint9_linear_62_183" x1="35.9999" y1="20.7059" x2="35.9999" y2="43.2941"
                            gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDF645"/>
              <stop offset="1" stopColor="#FED811"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="pickUpCoins-amount">25 000</span>
      <div className="pickUpCoins-actions">
        <Button
          className="pickUpCoins-btn"
          type="button"
          onClick={() => {
            closeModal();
            getPickUpCoins({amount: 25000});
          }}
        >
          Забрать мои монеты
        </Button>
      </div>
    </PickUpCoinsStyle>
  );
};

const mapStateToProps = (state: AppStateType) => {
  const {app} = state;
  return {
    app,
  };
};

export default connect(mapStateToProps, {getPickUpCoins, closeModal})(PickUpCoins);