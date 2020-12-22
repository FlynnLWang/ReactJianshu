import logoPic from '../../statics/jianshu-logo.png'
import styled from 'styled-components';

export const Addition = styled.div`
    height: 56px;
    position: absolute;
    right: 0;
    top: 0;
`;

export const Button = styled.div`
    border: 1px solid #ec6149;
    border-radius: 19px;
    float: right;
    font-size: 14px;
    line-height: 38px;
    margin-right: 20px;
    margin-top: 9px;
    padding: 0 20px;
    &.compose {
        background: #ec6149;
        color: #fff;
    }
    &.reg {
        color: #ec6149;
    }
`;

export const HeaderWrapper = styled.div`
    border-bottom: 1px solid #f0f0f0;
    height: 56px;
    position: relative;
`;

export const Logo = styled.a.attrs({
    href: '/'})`
    background: url(${logoPic});
    background-size: contain;
    dispay: block;
    height: 56px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100px;
`;

export const Nav = styled.div`
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    width: 960px;
`;

export const NavItem = styled.div`
    color: #333;
    font-size: 17px;
    line-height: 56px;
    padding: 0 15px;
    &.active {
        color: #ea6f5a;
    }
    &.left {
        float: left;
    }
    &.right {
        color: #969696;
        float: right;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: "搜索"
})`
    background: #eee;
    border: none;
    border-radius: 19px;
    box-sizing: border-box;
    font-size: 14px;
    height: 38px;
    margin-left: 20px;
    margin-top: 9px;
    outlie: none;
    padding: 0 20px;
    width: 160px;
    &::placeholder {
        color: #999;
    }
`;
