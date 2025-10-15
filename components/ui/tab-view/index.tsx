import React from "react";
import { useWindowDimensions, View, ViewProps } from "react-native";
import {
  Route,
  SceneRendererProps,
  TabBar,
  TabBarItem,
  TabView as TabViewBase,
} from "react-native-tab-view";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

type ITabViewProps = ViewProps & {
  className?: string;
  routes: Route[];
  renderScene: (
    props: SceneRendererProps & { route: Route },
  ) => React.ReactNode;
};

const TabView = React.forwardRef<
  React.ComponentRef<typeof View>,
  ITabViewProps
>(function TabView({ className, routes, renderScene, ...props }, ref) {
  const layout = useWindowDimensions();
  const theme = useColorScheme() ?? "light";
  const [index, setIndex] = React.useState(0);

  return (
    <TabViewBase
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled
          activeColor={
            theme === "light"
              ? Colors.light.tabIconSelected
              : Colors.dark.tabIconSelected
          }
          inactiveColor={
            theme === "light" ? Colors.light.icon : Colors.dark.icon
          }
          gap={36}
          style={{
            backgroundColor: "none",
          }}
          tabStyle={{
            width: "auto",
            paddingHorizontal: 0,
          }}
          indicatorStyle={{
            backgroundColor:
              theme === "light"
                ? Colors.light.tabIconSelected
                : Colors.dark.tabIconSelected,
            height: 4,
          }}
          renderTabBarItem={({ key, ...rest }) => (
            <TabBarItem
              {...rest}
              labelStyle={{
                fontWeight: "bold",
                fontSize: 16,
                marginHorizontal: 0,
              }}
            />
          )}
        />
      )}
    />
  );
});

TabView.displayName = "TabView";
export { TabView };
