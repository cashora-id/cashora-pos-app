package com.cashora.app

import com.tngtech.archunit.core.importer.ClassFileImporter
import com.tngtech.archunit.core.importer.ImportOption
import com.tngtech.archunit.library.dependencies.SlicesRuleDefinition
import org.junit.jupiter.api.Test

class ArchitectureTest {

    @Test
    fun `enforce modular monolith boundaries`() {
        val importedClasses = ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.cashora")

        // Enforce that different packages inside modules (com.cashora.modules.<name>) 
        // do not have cyclic dependencies and remain modular.
        val modulesRule = SlicesRuleDefinition.slices()
            .matching("com.cashora.modules.(*)..")
            .should().notDependOnEachOther()

        modulesRule.check(importedClasses)
    }
}
