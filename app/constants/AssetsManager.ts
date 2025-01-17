import LayoutLogoTransition from "../assets/imgs/layout-logo-transition.png"
import LogoTransparent from "../assets/imgs/logo-transparent.png"
import NamedLogoTransparent from "../assets/imgs/named-logo-transparent.png"
import StarsLarge from "../assets/imgs/stars-large.png"
import StarsSmall from "../assets/imgs/stars-small.png"
import WavingHandSVG from "../assets/svgs/waving-hand.svg"
import AnimatedLoader from "../assets/svgs/animated-loader.svg"

const AssetsManager = {
	LOGO_TRANSPARENT: LogoTransparent,
	NAMED_LOGO_TRANSPARENT: NamedLogoTransparent,
	LAYOUT_LOGO_TRANSITION: LayoutLogoTransition,
	STARS_SMALL: StarsSmall,
	STARS_LARGE: StarsLarge,
    WAVING_HAND: WavingHandSVG,
	ANIMATED_LOADER: AnimatedLoader
} as const

export default AssetsManager
