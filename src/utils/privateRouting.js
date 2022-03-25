export const privateRouting=({loginState, pathname, navigate})=>{
    const privateRoutes = ['/cart', '/wishlist', '/checkout', '/user-profile', '/sign-'];
    const authRoutes = [ '/sign-in', "/sign-up"];
    loginState ? authRoutes.some(route => route === pathname && navigate("/")):
    privateRoutes.some(route => route === pathname && navigate("/"));
}