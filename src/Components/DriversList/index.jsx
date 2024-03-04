const DriversList = ({drivers}) => {

  return (
    <main>
      {drivers.map((driver, index) => {
        return (
          <section key={index}>
            <h3>
              {driver.full_name}
            </h3>
          </section>
        );
      })}
    </main>
  );
};

export default DriversList;
