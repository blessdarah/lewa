import {
    PlusCircleFilled,
    SearchOutlined,
    TranslationOutlined,
} from "@ant-design/icons";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { Input, Dropdown, Segmented, Button, theme } from "antd";
import React, { useState } from "react";
import {
    AiFillDashboard,
    AiOutlineApi,
    AiOutlineLogout,
    AiOutlineUnorderedList,
    AiOutlineUser,
} from "react-icons/ai";
import { AppModalProvider } from "../Contexts/AppModalContext";
import { router, Link } from "@inertiajs/react";
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
        layout: "top", // side | top
        splitMenus: false,
    });
    const [_, setPathname] = useState("/list/sub-page/sub-sub-page1");

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
                                <Link href="/logout" method="post" as="button"
                                    style={{
                                        background: 'white',
                                        border: '1px solid #f8f8f8',
                                        cursor: 'pointer',
                                    }}>
                                    Logout
                                </Link>,
                                <Link href="/profile" as="button"
                                    style={{
                                        background: 'white',
                                        border: '1px solid #f8f8f8',
                                        cursor: 'pointer',
                                    }}>
                                    Profile
                                </Link>
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
