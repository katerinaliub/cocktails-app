import React from "react";

const layout = (props) => {
    return (
        <React.Fragment>
            <header>Header</header>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default layout;