import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import UpdateModal from "./UpdateModal";
import FormModal from "./FormModal";
import { useStateContext } from "../../contexts/ContextProvider";

const Body = () => {
  const [open, setOpen] = useState(null);
  const [newData, setNewData] = useState(false);
  const { getFromLocalStore, getAllVehicles } = useStateContext();

  const handleModal = (params) => {
    setOpen(open ? null : params.id);
    getFromLocalStore();
  };

  const handleNewModal = (params) => {
    setNewData(!newData);
    getFromLocalStore();
  };
  const data = {
    columns: [
      {
        field: "id",
        hide: true,
      },
      {
        field: "ownerName",
        headerName: "Owner Name",
        flex: 1,
        editable: false,
      },
      {
        field: "vehicleType",
        headerName: "Vehicle Type",
        flex: 1,
        editable: false,
      },
      {
        field: "licenseNo",
        headerName: "License No",
        flex: 1,
        editable: false,
      },
      {
        field: "entryTime",
        headerName: "Entry Time",
        flex: 1,
        editable: false,
      },
      {
        field: "exitTime",
        headerName: "Exit Time",
        flex: 1,
        editable: false,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        editable: false,
      },
      {
        field: "action",
        headerName: "Action",
        flex: 1,
        editable: false,
        renderCell: (params) => {
          const onClick = (e) => {
            handleModal(params);
          };

          return <Button onClick={onClick}>Update</Button>;
        },
      },
    ],
    rows: [...getAllVehicles],
    initialState: {
      columns: {
        columnVisibilityModel: {
          id: false,
        },
      },
    },
  };
  return (
    <Box mt={2}>
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleNewModal}>
        Add New
      </Button>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data.rows}
          columns={data.columns}
          pageSize={10}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
      {Boolean(open) && (
        <UpdateModal
          open={Boolean(open)}
          datas={open}
          handleModal={handleModal}
        />
      )}
      <FormModal open={newData} handleModal={handleNewModal} />
    </Box>
  );
};

export default Body;
