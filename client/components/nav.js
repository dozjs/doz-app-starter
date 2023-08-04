import {Component} from 'doz'

class NavSite extends Component {
    
    template(h) {
        
        //language=HTML
        return h`
            <style> 
                ul{
                    margin: 0;
                    padding: 0;
                }
                
                li{
                    list-style: none;
                    display: inline-block;
                    margin: 0;
                    padding: 0 10px;
                    border-right: 1px solid #fff;
                    text-transform: uppercase;
                    font-size: 12px;
                }
                
                li:last-child {
                    border: none;
                }
                
                a:link, a:visited{
                    color: white;
                    text-decoration: none;
                }
                
                a:hover{
                    color: lightcyan;
                }
                
                a.router-link-active{
                    border-bottom: 2px solid #00BCD4;
                    padding-bottom: 5px;
                }
            </style>
    
            <nav>
                <ul>
                    <li>
                        <a data-router-link href="/">Home</a>
                    </li>
                    <li>
                        <a data-router-link href="/about">About</a>
                    </li>
                </ul>   
            </nav>
        `
    }
}

NavSite.tag = 'nav-site';
export default NavSite;