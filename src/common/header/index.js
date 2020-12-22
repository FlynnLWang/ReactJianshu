import { Addition, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './style';

function Header() {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="active left">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">Aa</NavItem>
                <NavSearch></NavSearch>
            </Nav>
            <Addition>
                <Button className="compose">写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}

export default Header;