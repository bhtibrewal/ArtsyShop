export const privateRouting = ({ loginState, pathname, navigate }) => {
    const privateRoutes = ['/cart', '/wishlist', '/checkout', '/user-profile'];
    const authRoutes = ['/sign-in', "/sign-up"];
    loginState ? authRoutes.some(route => route === pathname && navigate(-1)) :
        privateRoutes.some(route => route === pathname && navigate("/"));
}