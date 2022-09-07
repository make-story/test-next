export declare global {
  export interface Window {
    gtag: any;
    dataLayer: any;
    /* 공통변수 */
    AP_DATA_GCID: string | undefined | '';
    AP_DATA_CID: string | undefined | '';
    AP_DATA_ISMEMBER: string | undefined | '';
    AP_DATA_ISLOGIN: 'Y' | 'N';
    AP_DATA_LOGINTYPE: string;
    AP_DATA_CA: number | undefined;
    AP_DATA_CD: number | undefined;
    AP_DATA_CG: string | undefined;
    AP_DATA_CT: string | undefined;
    AP_DATA_PURCHASE: boolean;
    AP_DATA_PUSHAGREE: object;
    AP_DATA_SITENAME: string;
    AP_DATA_CHANNEL: string;
    AP_DATA_PAGENAME: string;
    AP_DATA_PAGETYPE: string;
    AP_DATA_BREAD: string;
    AP_DATA_DATE: number | undefined;
    AP_DATA_ISEMPLOYEE: 'Y' | 'N' | '';
    AP_DATA_BRANDNM: string;
    AP_DATA_BRANDCD: string | number;
    /* 상품상세 */
    AP_PRD_NAME: string | undefined | '';
    AP_PRD_CODE: string | undefined | '';
    AP_PRD_SN: string | undefined | '';
    AP_PRD_SAPCODE: string | undefined | '';
    AP_PRD_PRDPRICE: number;
    AP_PRD_PRICE: number;
    AP_PRD_BRAND: string | undefined | '';
    AP_PRD_CATEGORY: string | undefined | '';
    AP_PRD_ISMEMBER: string;
    AP_PRD_ISSTOCK: 'Y' | 'N' | 'other';
    /* 장바구니 */
    AP_CART_PRICE: number;
    AP_CART_PRDPRICE: number;
    AP_CART_DISCOUNT: number;
    AP_CART_PRDS: any;
    AP_CART_ADDPRDS: any;
    AP_RMCART_PRDS: {
      name: string;
      code: string;
      sapcode: string;
      brand: string;
      price: number;
      prdprice: number;
      quantity: number;
      variant: string;
      promotion: string;
      cate: string;
      catecode: string;
    }[];
    /* 주문서 */
    AP_ORDER_PRICE: number;
    AP_ORDER_PRDPRICE: number;
    AP_ORDER_DISCOUNT: number;
    AP_ORDER_TYPE: string;
    AP_ORDER_PRDS: any;
    /* 주문완료 */
    AP_PURCHASE_PRICE: number;
    AP_PURCHASE_PRDPRICE: number;
    AP_PURCHASE_DCTOTAL: number;
    AP_PURCHASE_DCBASIC: number;
    AP_PURCHASE_COUPON: number;
    AP_PURCHASE_MEMBERSHIP: number;
    AP_PURCHASE_GIFTCARD: number;
    AP_PURCHASE_POINT: number;
    AP_PURCHASE_PPOINT: string;
    AP_PURCHASE_ONLINEGIFT: number;
    AP_PURCHASE_ORDERNUM: string | undefined;
    AP_PURCHASE_BEAUTYACC: number;
    AP_PURCHASE_SHIPPING: number;
    AP_PURCHASE_TYPE: string | undefined;
    AP_PURCHASE_COUPONNAME: any;
    AP_PURCHASE_PRDS: any;
    AP_SAMPLE_PRDS: { name: string; code: string; brand: string; type: string }[];
    /* 주문취소 */
    AP_REFUND_PRICE: number;
    AP_REFUND_PRDPRICE: number;
    AP_REFUND_ORDERNUM: string;
    AP_REFUND_CONTENT: any;
    AP_REFUND_PRDS: any;
    /* 검색 */
    AP_SEARCH_TERM: string | undefined | '';
    AP_SEARCH_PRDRESULT: any;
    AP_SEARCH_NUM: number;
    AP_SEARCH_TYPE: string | undefined | '';
    /* 리뷰 */
    AP_REVIEW_RATING: string;
    AP_REVIEW_PICTURE: string;
    AP_REVIEW_PRD: string;
    AP_REVIEW_PRDCODE: string;
    AP_REVIEW_CONTENT: string;
    /* 회원가입 */
    AP_JOIN_NAME: string;
    /* 좋아요 */
    AP_LIKE_PRDS: [];
    /* 쿠폰다운 */
    AP_COUPON_NAME: string;
    /* 뷰티포인트금액 */
    AP_DATA_POINT: string;
    /* 네이버 페이 */
    AP_PRD_NAVERPAY_OPTIONS: { option: string; quantity: number }[];
    /* 정기구독 */
    AP_SUBSCRIPTION_ID: string;
    AP_SUBSCRIPTION_CYCLE: string;
    AP_SUBSCRIPTION_PAYMENT_METHOD: string;
    AP_SUBSCRIPTION_AMOUNT: number;
    AP_SUBSCRIPTION_PRDS: {
      name: string;
      code: string;
      sapcode: string;
      brand: string;
      price: number;
      prdprice: number;
      quantity: number;
      variant: string;
      promotion: string;
    }[];
    /* 스마트뷰티 */
    AP_BEAUTY_SKINTYPE: string;
    AP_BEAUTY_WORRY: string;
    AP_BEAUTY_SYM: string;
    AP_BEAUTY_COLOR: string;
    AP_BEAUTY_PRD: string;
    AP_BEAUTY_PRDCODE: number;

    /* nethru 태깅을 위한 변수/함수 정의 */
    AP: any;
    nethruLoginId: string | undefined;
    accessChannel: string;
    i_sDeviceNum: string | undefined;
    SmartOffer: any;

    /* SNS 공유 */
    Kakao: any;
    kakao: any;

    /*네이버 페이*/
    naver: any;

    ymkAsyncInit: any;
    YMK: any;

    /*안드로이드 앱*/
    apmall: any;
    Android: any;

    /*ios 앱*/
    webkit: any;

    /*pixlee*/
    pixlee_analytics: any;

    /* webviewControl */
    CustomEvent: any;
    launchLayerPopup: any;
    smartBeautyCameraFailed: any;

    /* INICIS */
    inicisDone: any;
    paySuccessResult: any;
    payFailResult: any;

    /* 외부 연계 서비스 제어 스크립트 */
    amoreController: any;

    /** 개발/테스트 환경 테스트용 queryClient */
    queryClient: any;

    /* 카카오챗봇 */
    Kakaoi: any;

    /* OnePay (팝업용) */
    wpayRegistPopup: any;
  }
}
