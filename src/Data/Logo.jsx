
const Logo = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00016 16.9999L17.0002 6.99992L27.0002 16.9999L17.0002 26.9999L7.00016 16.9999Z" fill="#CAFF33" />
            <path d="M33.6668 10.3333L27.0002 16.9999V6.99992H17.0002L23.6668 0.333252H33.6668V10.3333Z" fill="#CAFF33" />
            <path d="M33.6668 23.6666L27.0002 16.9999V26.9999H17.0002L23.6668 33.6666H33.6668V23.6666Z" fill="#CAFF33" />
            <path d="M0.333496 23.6666L7.00016 16.9999V26.9999H17.0002L10.3335 33.6666H0.333496L0.333496 23.6666Z" fill="#CAFF33" />
            <path d="M0.333496 10.3333L7.00016 16.9999V6.99992H17.0002L10.3335 0.333252H0.333496L0.333496 10.3333Z" fill="#CAFF33" />
        </svg>
    );
};

const LogoText = ({ className }) => {
    return (
        <svg className={className} viewBox="0 0 112 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3537 0.333252L9.20848 11.1841V18.3323H6.31218V11.1841L0.166992 0.333252H3.46625L7.77292 8.30427L12.0544 0.333252H15.3537Z" fill="white" />
            <path d="M20.5084 18.6666C18.6615 18.6666 17.0916 18.0152 15.7987 16.7124C14.5059 15.4096 13.8595 13.8068 13.8595 11.9041C13.8595 10.0013 14.5059 8.39855 15.7987 7.09576C17.0916 5.79297 18.6615 5.14158 20.5084 5.14158C22.3721 5.14158 23.942 5.79297 25.218 7.09576C26.5108 8.39855 27.1573 10.0013 27.1573 11.9041C27.1573 13.8068 26.5108 15.4096 25.218 16.7124C23.942 18.0152 22.3721 18.6666 20.5084 18.6666ZM17.7128 14.8096C18.4684 15.581 19.4002 15.9667 20.5084 15.9667C21.6165 15.9667 22.5484 15.581 23.3039 14.8096C24.0595 14.0383 24.4373 13.0697 24.4373 11.9041C24.4373 10.7384 24.0595 9.76991 23.3039 8.99852C22.5484 8.22713 21.6165 7.84143 20.5084 7.84143C19.4002 7.84143 18.4684 8.22713 17.7128 8.99852C16.9573 9.76991 16.5795 10.7384 16.5795 11.9041C16.5795 13.0697 16.9573 14.0383 17.7128 14.8096Z" fill="white" />
            <path d="M38.1042 5.47584H40.8242V18.3323H38.1042V16.6867C37.2815 18.0066 35.9802 18.6666 34.2005 18.6666C32.7565 18.6666 31.5896 18.1952 30.6997 17.2524C29.8098 16.3096 29.3649 15.0153 29.3649 13.3697V5.47584H32.0849V13.0869C32.0849 14.0468 32.3368 14.7839 32.8405 15.2982C33.3442 15.8124 34.0326 16.0696 34.9057 16.0696C35.8627 16.0696 36.635 15.7696 37.2227 15.1696C37.8103 14.5525 38.1042 13.6183 38.1042 12.3669V5.47584Z" fill="white" />
            <path d="M46.7248 7.63573C47.4132 6.04153 48.706 5.24443 50.6033 5.24443V8.25284C49.5623 8.18427 48.6557 8.4414 47.8833 9.02423C47.111 9.58991 46.7248 10.5327 46.7248 11.8527V18.3323H44.0048V5.47584H46.7248V7.63573Z" fill="white" />
            <path d="M63.1656 8.99852C63.938 9.40992 64.5424 9.97561 64.9789 10.6956C65.4155 11.4155 65.6338 12.2469 65.6338 13.1897C65.6338 14.6639 65.1217 15.8896 64.0975 16.8667C63.0733 17.8438 61.8224 18.3323 60.3449 18.3323H52.7893V0.333252H59.7908C61.2347 0.333252 62.452 0.813227 63.4426 1.77318C64.4501 2.71599 64.9538 3.89878 64.9538 5.32157C64.9538 6.88148 64.3577 8.10713 63.1656 8.99852ZM59.7908 3.11025H55.6856V7.84143H59.7908C60.4288 7.84143 60.9661 7.61859 61.4026 7.1729C61.8392 6.71006 62.0575 6.14438 62.0575 5.47584C62.0575 4.80731 61.8392 4.25019 61.4026 3.8045C60.9661 3.34167 60.4288 3.11025 59.7908 3.11025ZM60.3449 15.5553C61.0165 15.5553 61.5789 15.3153 62.0323 14.8354C62.5024 14.3382 62.7375 13.7383 62.7375 13.0355C62.7375 12.3326 62.5024 11.7412 62.0323 11.2613C61.5789 10.7641 61.0165 10.5156 60.3449 10.5156H55.6856V15.5553H60.3449Z" fill="white" />
            <path d="M78.0812 5.47584H80.8012V18.3323H78.0812V16.481C77.057 17.9381 75.5878 18.6666 73.6737 18.6666C71.9444 18.6666 70.4668 18.0152 69.2411 16.7124C68.0155 15.3925 67.4026 13.7897 67.4026 11.9041C67.4026 10.0013 68.0155 8.39855 69.2411 7.09576C70.4668 5.79297 71.9444 5.14158 73.6737 5.14158C75.5878 5.14158 77.057 5.86154 78.0812 7.30146V5.47584ZM71.256 14.8611C72.0115 15.6325 72.9602 16.0182 74.1019 16.0182C75.2436 16.0182 76.1923 15.6325 76.9478 14.8611C77.7034 14.0725 78.0812 13.0869 78.0812 11.9041C78.0812 10.7213 77.7034 9.74419 76.9478 8.9728C76.1923 8.18427 75.2436 7.79001 74.1019 7.79001C72.9602 7.79001 72.0115 8.18427 71.256 8.9728C70.5004 9.74419 70.1226 10.7213 70.1226 11.9041C70.1226 13.0869 70.5004 14.0725 71.256 14.8611Z" fill="white" />
            <path d="M90.5952 5.14158C92.0392 5.14158 93.2061 5.61298 94.096 6.55579C94.9859 7.49859 95.4308 8.79281 95.4308 10.4384V18.3323H92.7108V10.7213C92.7108 9.76133 92.459 9.02423 91.9552 8.50997C91.4515 7.99571 90.7632 7.73858 89.8901 7.73858C88.933 7.73858 88.1607 8.04714 87.573 8.66425C86.9854 9.26422 86.6915 10.1899 86.6915 11.4412V18.3323H83.9715V5.47584H86.6915V7.12147C87.5143 5.80154 88.8155 5.14158 90.5952 5.14158Z" fill="white" />
            <path d="M111.834 18.3323H108.383L101.432 9.76991V18.3323H98.5359V0.333252H101.432V8.40712L108.131 0.333252H111.582L104.454 9.10137L111.834 18.3323Z" fill="white" />
        </svg>
    );
};

export { Logo, LogoText };