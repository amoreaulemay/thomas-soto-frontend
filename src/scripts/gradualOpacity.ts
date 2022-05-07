import jQuery from "jquery";

export const gradualOpacity = () => {
    jQuery($ => {
        const selector = `img, .TilesGrid--center > div:not(:first-child)`;

        const shouldGetDark = () => ($(window).width() ?? 0) >= 550;
        const dark = () => $(selector).css('opacity', 0);
        const reset = () => $(selector).css('opacity', 1);
        const gradCb = () => {

            const scroll = $(window).scrollTop() ?? 0;
            const opacity = shouldGetDark() ? Math.min(scroll / 100, 1) : 1;

            if (opacity > 0) {
                $(selector).css('opacity', opacity < 0.1 ? 0 : opacity);
            }
        }

        $(window).on('load', () => shouldGetDark() ? dark() : reset());
        $(window).on('resize', () => shouldGetDark() ? dark() : reset());
        $(window).on('scroll', () => shouldGetDark() ? gradCb() : reset());

        shouldGetDark() ? dark() : reset();
    });
}