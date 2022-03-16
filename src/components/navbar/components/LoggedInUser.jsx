
export const LoggedInUser = () => {
  return (
    <div className="user">
    <div className="avatar-text avatar-s">BT</div>
    <div className="user-dropdown flex-col">
      <a
        className="flex-align-center"
        href="/pages/user-profile/user-profile.html"
      >
        <span>My Account</span>
        <i className="fa-solid fa-angle-right"></i>
      </a>
      <div className="flex-align-center">
        <span>My offers</span>
        <i className="fa-solid fa-angle-right"></i>
      </div>
      <div className="flex-align-center">
        <span>Logout</span>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  </div>
  )
}
