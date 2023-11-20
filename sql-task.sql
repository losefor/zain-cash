SELECT
  city,
  -- Concatenate the first and last names of all employees in each city
  GROUP_CONCAT(CONCAT(first_name, ' ', last_name) SEPARATOR ', ') AS employee_names,

  -- Calculate the total salary of all employees in each city
  SUM(salary) AS total_salary
FROM users
GROUP BY city;