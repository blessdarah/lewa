import {
    PlusCircleFilled,
    SearchOutlined,
    TranslationOutlined,
} from "@ant-design/icons";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { Avatar, Divider, Input, Menu, Popover, Segmented, theme } from "antd";
import React, { useState } from "react";
import {
    AiFillDashboard,
    AiOutlineApi,
    AiOutlineLogout,
    AiOutlineUnorderedList,
    AiOutlineUser,
} from "react-icons/ai";
import { AppModalProvider } from "../Contexts/AppModalContext";
import { router } from "@inertiajs/react";
import navMenus from "./navMenus";

const SearchInput = () => {
    const { token } = theme.useToken();

    return (
        <div
            key="SearchOutlined"
            aria-hidden
            style={{
                display: "flex",
                alignItems: "center",
                marginInlineEnd: 24,
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Input
                style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: token.colorBgTextHover,
                }}
                prefix={
                    <SearchOutlined
                        style={{
                            color: token.colorTextLightSolid,
                        }}
                    />
                }
                placeholder="Search"
                bordered={false}
            />
            <PlusCircleFilled
                style={{
                    color: token.colorPrimary,
                    fontSize: 24,
                }}
            />
        </div>
    );
};

const AppShell = ({ children }) => {
    const [settings, setSettings] = useState({
        fixSiderbar: true,
        layout: "side", // side | top
        splitMenus: false,
    });
    const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
    const [num, setNum] = useState(40);

    return (
        <div
            id="test-pro-layout"
            style={{
                height: "100vh",
            }}
        >
            <AppModalProvider>
                <ProConfigProvider hashed={false}>
                    <ProLayout
                        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4RigS-XU9n7biYln3l1igYBtgAVv3wjyWYw&usqp=CAU"
                        title="Lewa"
                        prefixCls="my-prefix"
                        locale="en-US"
                        bgLayoutImgList={[
                            {
                                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
                                left: 85,
                                bottom: 100,
                                height: "303px",
                            },
                            {
                                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
                                bottom: -68,
                                right: -45,
                                height: "303px",
                            },
                            {
                                src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
                                bottom: 0,
                                left: 0,
                                width: "331px",
                            },
                        ]}
                        {...navMenus}
                        // location={{
                        //   pathname,
                        // }}
                        siderMenuType="sub"
                        menu={{
                            collapsedShowGroupTitle: true,
                        }}
                        rightContentRender={() => (
                            <>
                                <Segmented
                                    style={{ marginRight: "1rem" }}
                                    value={settings?.layout}
                                    options={[
                                        {
                                            value: "top",
                                            icon: <AiFillDashboard />,
                                        },
                                        {
                                            value: "side",
                                            icon: <AiOutlineUnorderedList />,
                                        },
                                    ]}
                                    onChange={(value) =>
                                        setSettings({
                                            ...settings,
                                            layout: value,
                                        })
                                    }
                                />
                                {document.body.clientWidth > 1400 ? (
                                    settings?.layout === "top" ? (
                                        <SearchInput />
                                    ) : null
                                ) : undefined}
                                <div>
                                    <Popover
                                        placement={
                                            settings?.layout === "top"
                                                ? "bottomRight"
                                                : "topRight"
                                        }
                                        content={
                                            <Menu
                                                mode="vertical"
                                                items={[
                                                    {
                                                        label: (
                                                            <a href="/">
                                                                Profile
                                                            </a>
                                                        ),
                                                        icon: <AiOutlineUser />,
                                                        key: "profile",
                                                    },
                                                    {
                                                        label: (
                                                            <a href="/">
                                                                Switch branch
                                                            </a>
                                                        ),
                                                        icon: <AiOutlineApi />,
                                                        key: "branch",
                                                    },
                                                    {
                                                        label: (
                                                            <a href="/">
                                                                Logout
                                                            </a>
                                                        ),
                                                        icon: (
                                                            <AiOutlineLogout />
                                                        ),
                                                        key: "logout",
                                                    },
                                                ]}
                                            />
                                        }
                                        title={
                                            <>
                                                <p
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {/* {auth &&
                                                            auth.user &&
                                                            auth.user?.profile.name} */}
                                                    Admin name
                                                </p>
                                                <Divider
                                                    style={{
                                                        margin: 0,
                                                        padding: 0,
                                                    }}
                                                />
                                            </>
                                        }
                                        trigger="click"
                                    >
                                        <Avatar
                                            src="https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
                                            style={{ cursor: "pointer" }}
                                        />
                                    </Popover>
                                </div>
                            </>
                        )}
                        actionsRender={(props) => {
                            if (props.isMobile) return [];
                            return [
                                props.layout !== "side" &&
                                document.body.clientWidth > 1400 ? (
                                    <SearchInput />
                                ) : undefined,
                                <TranslationOutlined />,
                            ];
                        }}
                        headerTitleRender={(logo, title, _) => {
                            const defaultDom = (
                                <a>
                                    {logo}
                                    {title}
                                </a>
                            );
                            if (document.body.clientWidth < 1400) {
                                return defaultDom;
                            }
                            if (_.isMobile) return defaultDom;
                            return (
                                <>
                                    {defaultDom}
                                    {/* <MenuCard /> */}
                                </>
                            );
                        }}
                        menuFooterRender={(props) => {
                            if (props?.collapsed) return undefined;
                            return (
                                <div
                                    style={{
                                        textAlign: "center",
                                        paddingBlockStart: 12,
                                    }}
                                >
                                    <div>
                                        © {new Date().getFullYear()} Darah-B
                                        Studios
                                    </div>
                                </div>
                            );
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        menuItemRender={(item, dom) => (
                            <div
                                onClick={() => {
                                    setPathname(item.path || "/welcome");
                                    router.get(item.path);
                                    // window.location = item.path;
                                }}
                            >
                                {dom}
                            </div>
                        )}
                        {...settings}
                    >
                        {children}
                    </ProLayout>
                </ProConfigProvider>
            </AppModalProvider>
        </div>
    );
};

export default AppShell;
