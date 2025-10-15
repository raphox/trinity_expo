import { ChevronDownIcon } from "lucide-react-native";
import { useState } from "react";

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
} from "@/components/ui/actionsheet";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { ThemedText } from "./themed-text";

export default function AccountFilter() {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(false);

  return (
    <>
      <Button
        variant="outline"
        onPress={() => setShowActionsheet(true)}
        className="px-4"
      >
        <ButtonText>All Accounts</ButtonText>
        <ButtonIcon as={ChevronDownIcon} className="ml-2" />
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ThemedText type="subtitle" className="px-6 pt-4 pb-2">
            Select Account
          </ThemedText>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>All Accounts</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Real Life</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Matrix</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
