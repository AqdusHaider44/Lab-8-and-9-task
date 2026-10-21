
## Database Migration Checks — Theory and Workflow

This project currently uses React and Vite without a database or migration framework. Therefore, database migration commands are documented as a theoretical workflow and are not executed against this project.

**Purpose:** Verify that database schema changes can be applied, tested, rolled back, and applied again safely.

**Recommended workflow:**

1. **Apply migration locally:** Apply the pending schema migration to a disposable local development database.
2. **Run tests:** Run database integration tests and verify that the expected tables, columns, constraints, and application queries work correctly.
3. **Rollback:** Revert the migration using the rollback mechanism supported by the selected migration framework. Confirm the previous schema is restored.
4. **Re-apply:** Apply the migration again and rerun the relevant tests to confirm repeatable, consistent behavior.

**Example commands:**

- Prisma: `npx prisma migrate dev`
- Alembic: `alembic upgrade head`
- Alembic rollback example: `alembic downgrade -1`

**Expected result:** The migration applies successfully, tests pass, rollback restores the previous schema, and re-applying the migration succeeds.

**Safety:** Use a disposable local database, never production data. Prisma rollback procedures differ from Alembic; use the appropriate framework-specific rollback process.

**Status:** The workflow above is documented for learning purposes. No database migration has been executed in this frontend-only project.