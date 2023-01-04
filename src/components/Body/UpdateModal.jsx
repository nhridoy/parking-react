import {
  Autocomplete,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  addToLocalStorage,
  getFromLocalStorage,
  updateFromLocalStorage,
} from "../../utils/localStorages";

const UpdateModal = ({ open, datas, handleModal }) => {
  const { getFromLocalStore } = useStateContext();

  const [current, setCurrent] = useState(
    getFromLocalStore().find((i) => i.id === datas)
  );

  const [defaultEntryDate, setDefaultEntryDate] = useState(
    moment().format("MM/DD/YYYY h:mm A")
  );
  const [defaultExitDate, setDefaultExitDate] = useState(
    moment().format("MM/DD/YYYY h:mm A")
  );

  const [currentStatus, setCurrentStatus] = useState(current?.status);
  const [defaultCharge, setDefaultCharge] = useState(current?.parkingCharge);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...current,
    },
  });

  const changeVehicle = (currentVehicle) => {
    setDefaultCharge(
      currentVehicle === "Microbus" ? 100 : currentVehicle === "Car" ? 200 : 300
    );
  };

  const onSubmit = (data) => {
    if (
      data?.exitTime &&
      moment(data?.entryTime).format("MM/DD/YYYY h:mm A") >
        moment(data?.exitTime).format("MM/DD/YYYY h:mm A")
    ) {
      toast.error("Exit date can not be greater");
      return;
    }
    updateFromLocalStorage({
      ...data,
      entryTime: moment(data?.entryTime).format("MM/DD/YYYY h:mm A"),
      exitTime: data?.exitTime
        ? moment(data?.exitTime).format("MM/DD/YYYY h:mm A")
        : "",
    });
    toast.success("Parking Updated");
    handleModal();
  };

  return (
    <Modal
      open={open}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
          bgcolor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Car
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            sx={{ display: "none" }}
            label="Vehicle License Number"
            variant="outlined"
            error={errors.id}
            {...register("id", { required: true })}
          />
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Vehicle License Number"
                variant="outlined"
                error={errors.licenseNo}
                {...register("licenseNo", { required: true })}
              />
              {errors.licenseNo && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              <Autocomplete
                defaultValue={{
                  label: current?.vehicleType,
                }}
                options={[
                  { label: "Microbus" },
                  { label: "Car" },
                  { label: "Truck" },
                ]}
                onChange={(e, value) => changeVehicle(value.label)}
                autoHighlight
                disableClearable
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) =>
                  option.label === value.label
                }
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 }, my: "5px" }}
                    {...props}
                  >
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="vehicleType"
                    label="Vehicle Type"
                    placeholder="Vehicle Type"
                    fullWidth
                    error={Boolean(errors.vehicleType)}
                    {...register("vehicleType", { required: true })}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />
              {errors.vehicleType && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Vehicle Owner Name"
                variant="outlined"
                error={errors.ownerName}
                {...register("ownerName", { required: true })}
              />
              {errors.ownerName && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Vehicle Owner Phone"
                variant="outlined"
                error={errors.ownerPhone}
                {...register("ownerPhone", { required: true })}
              />
              {errors.ownerPhone && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              <Autocomplete
                options={[{ label: "In" }, { label: "Out" }]}
                onChange={(e, value) => setCurrentStatus(value.label)}
                autoHighlight
                disableClearable
                defaultValue={{
                  label: current?.status,
                }}
                getOptionLabel={(option) => option.label}
                isOptionEqualToValue={(option, value) =>
                  option.label === value.label
                }
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 }, my: "5px" }}
                    {...props}
                  >
                    {option.label}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    id="status"
                    label="Status"
                    placeholder="Status"
                    fullWidth
                    error={Boolean(errors.status)}
                    {...register("status", { required: true })}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                )}
              />

              {errors.status && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                label="Vehicle Owner Address"
                variant="outlined"
                error={errors.address}
                {...register("address", { required: true })}
              />
              {errors.address && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
            <Grid item md={12}>
              <Controller
                name="entryTime"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                }}
                defaultValue=""
                render={({ field, fieldState: { error } }) => (
                  <DateTimePicker
                    label="Entry Time"
                    // maxDateTime={defaultExitDate}
                    value={defaultEntryDate}
                    onChange={(e) => setDefaultEntryDate(e)}
                    {...field}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                )}
              />

              {errors.entryTime && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
            {currentStatus === "Out" && (
              <Grid item md={12}>
                <Controller
                  name="exitTime"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  defaultValue=""
                  render={({ field, fieldState: { error } }) => (
                    <DateTimePicker
                      label="Exit Time"
                      //   maxDateTime={defaultEntryDate}
                      value={defaultExitDate}
                      onChange={(e) => setDefaultExitDate(e)}
                      {...field}
                      renderInput={(params) => (
                        <TextField fullWidth {...params} />
                      )}
                    />
                  )}
                />
                {errors.exitTime && (
                  <Typography variant="subtitle2" color="red">
                    This field is required
                  </Typography>
                )}
              </Grid>
            )}

            <Grid item md={12}>
              <TextField
                fullWidth
                label="Parking Charge"
                variant="outlined"
                type="number"
                defaultValue={defaultCharge}
                error={errors.parkingCharge}
                {...register("parkingCharge", { required: true })}
              />
              {errors.parkingCharge && (
                <Typography variant="subtitle2" color="red">
                  This field is required
                </Typography>
              )}
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateModal;
