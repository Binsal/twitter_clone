import React from "react";

const PageLoading = () => {

    return(
        <div style={{display:'flex', minWeight:'100vh',justifyContent:'center',alignItems:'center'}}>
            <div className="loadingPage-container">
                <h1>Loading....</h1>
            </div>
        </div>
    );
};

export default PageLoading;