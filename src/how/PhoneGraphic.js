
const PhoneGraphic = ({src}) => (
    <div className="phone-graphic">
        <div className="circle-outer"></div>
        <div className="circle-inner"></div>
        <div className="phone">
            <img src={src} alt="mobile app screen"/>
        </div>
    </div>
);

export default PhoneGraphic