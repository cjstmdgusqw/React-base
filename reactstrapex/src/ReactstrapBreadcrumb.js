import { Breadcrumb, BreadcrumbItem} from "reactstrap";

const ReactstrapBreadcrumb = () => {
    return(
        <div id = "top">
            <Breadcrumb tab = 'nav' listTag = 'div'>
                <BreadcrumbItem tag = 'a' href = '#top'>Go_top</BreadcrumbItem>
                <BreadcrumbItem tag = 'a' href = '#bottom'>Go_bottom</BreadcrumbItem>
            </Breadcrumb>
            <div id = "bottom" style={{marginTop : '1000px'}}>
                <span>bottom</span>
            </div>
        </div>
    )
}

export default ReactstrapBreadcrumb;