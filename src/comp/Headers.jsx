import React from "react";
import Avatar from "@material-ui/core/Avatar";

function header() {
  return (
    <div className="header">
      <header>
        <h1>
          <Avatar
            className="logo"
            alt="La Liga Logo"
            src="https://banner2.cleanpng.com/20180716/rbh/kisspng-segunda-divisin-201617-la-liga-spain-premier-la-liga-5b4cda9b090396.3229595515317633550369.jpg"
          />
          LA LIGA
          <Avatar
            className="logo"
            alt="La Liga Logo"
            src="https://banner2.cleanpng.com/20180716/rbh/kisspng-segunda-divisin-201617-la-liga-spain-premier-la-liga-5b4cda9b090396.3229595515317633550369.jpg"
          />
        </h1>
      </header>
    </div>
  );
}
export default header;
