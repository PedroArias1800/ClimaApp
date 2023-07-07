import React from "react";
import { Formik } from "formik";
import { CardClima } from "./CardClima";
import { useClima } from "../context/ClimaContext";
import { Alerta } from "./Alerta";

export const MenuClimaApp = () => {

  const { FindClima } = useClima();

  return (
    <div>
      <Alerta />
      <p>Ingresa el nombre de un país para ver su clima actual</p>
      <Formik
        initialValues={{ pais: "" }}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          FindClima(values.pais);

          actions.resetForm();
        }}
      >
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <form action="" method="get" onSubmit={handleSubmit}>
            <label htmlFor="pais">
              País:
              <input
                type="text"
                id="pais"
                name="pais"
                value={values.pais}
                onChange={handleChange}
                placeholder="Panamá"
                required
              />
            </label>
            <input
              type="submit"
              value={isSubmitting ? "Buscando..." : "Buscar"}
            />
          </form>
        )}
      </Formik>
      <CardClima />
    </div>
  );
};
