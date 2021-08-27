import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
import {
    Node,
    HierarchicalTree,
    Diagram,
    NodeModel,
    ConnectorModel,
    Inject,
    DataBinding
} from "@syncfusion/ej2-react-diagrams";
import { DataManager } from "@syncfusion/ej2-data";




export let data: Object[] = [
    {
        Name: "1",
        
    },
    {
        Name: "2",
        ReportingPerson: "1"
        
    },
    {
        Name: "3",
        ReportingPerson: "2"
        
    },
    {
        Name: "4",
        ReportingPerson: "2"
        
    },
    
];

let dataSettings: object = {
    id: "Name",
    parentId: "ReportingPerson",
    dataManager: new DataManager(data )
}



function App() {

   


  return (
      <DiagramComponent
          id="diagram"
          width={"100%"}
          height={"350px"}
          dataSourceSettings={dataSettings}
          layout={
              {
             
                  type: 'OrganizationalChart',
                  enableAnimation: true,
                  margin: { top: 20 },
                  horizontalSpacing: 100,
                  verticalSpacing: 50,
                  horizontalAlignment: "Center",
                  verticalAlignment: 'Top'
              }
          }
          getNodeDefaults={(node: NodeModel): NodeModel => {
            
              node.width = 100
              node.height = 50
           
              
              node.style.fill = "#3967aa"
              return node;
          }}
          getConnectorDefaults={(connector: ConnectorModel): ConnectorModel => {
              connector.type = "Orthogonal";
              connector.cornerRadius = 7;
              return connector;
          }}><Inject services={[HierarchicalTree, DataBinding]} /></DiagramComponent>
    
  );
}

export default App;
