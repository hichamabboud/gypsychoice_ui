import { HStack } from "@chakra-ui/react";
import React from "react";

const IconLabel = ({ children, icon, divider}) => {
  return (
    <HStack spacing={3} alignItems='center' >
          {icon}
          <HStack spacing={3} divider={divider} >
              {React.Children.map(children, (child) => { 
                  if (React.isValidElement(child)) {
                      return React.cloneElement(child, { mx: 1 });
                  }
              }) }
          </HStack>
    </HStack>
  )
}

export default IconLabel;
