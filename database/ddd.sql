CREATE TABLE users (
  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR(100) NOT NULL,
  auth_token VARCHAR(100) NOT NULL,
  first_name TEXT,
  last_name TEXT,
  );
CREATE TABLE income (
  income_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  total_income INTEGER NOT NULL,
  user_id INTEGER,
  CONSTRAINT fk_user
      FOREIGN KEY(user_id)
	 REFERENCES users(user_id)
);
CREATE TABLE expenses (
  expense_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  expense_type VARCHAR(100),
  expense_amount INTEGER NOT NULL,
  frequency VARCHAR(100),
  user_id INTEGER,
  CONSTRAINT fk_user
      FOREIGN KEY(user_id)
	 REFERENCES users(user_id)
);

CREATE TABLE savings (
  savings_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  overall_target INTEGER NOT NULL,
  savings_total INTEGER NOT NULL,
  pot_totals INTEGER,
  user_id INTEGER,
  CONSTRAINT fk_user
      FOREIGN KEY(user_id)
	  REFERENCES users(user_id)
);
CREATE TABLE pots (
  pot_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  pot_total INTEGER,
  pot_amount INTEGER,
  pot_target INTEGER,
  savings_id INTEGER,
  CONSTRAINT fk_savings
      FOREIGN KEY(savings_id)
	  REFERENCES savings(savings_id)
  );

INSERT INTO users (user_name, auth_token, first_name, last_name ) VALUES ('frugalFranatics', 'abc123', 'Jose', 'Gonzales');
INSERT INTO income (total_income, user_id) VALUES (2500, 1);
INSERT INTO expenses (expense_type, expense_amount, frequency, user_id) VALUES ('Rent', 950, 'Monthly', 1);
INSERT INTO savings (overall_target, savings_total, pot_totals, user_id) VALUES (5000, 100, 100, 1);
INSERT INTO pots (pot_total, pot_amount, pot_target, savings_id) VALUES (100, 100, 5000,1);

