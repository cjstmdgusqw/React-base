function App(){
    return(
        <div>
            <h1>Start React!!</h1>
            <p>CSS 적용</p>
            <SubComponent str = "react" num = {20} bool = {1==1} obj = {{react : '리액트', exam : 100}}
            arr = {[10,20,30]} fucn = {console.log("I am Function")}/>
        </div>
    );
}