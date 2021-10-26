$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Pesquisa.feature");
formatter.feature({
  "name": "Busca de Veículo",
  "description": "  Sendo um interresado\n  Quero fazer buscas por marca e modelo\n  Para pesquisar um carro",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "name": "Buscar veículo com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que esteja na tela inicial da Webmotors",
  "keyword": "Dado "
});
formatter.step({
  "name": "eu inserir as informações \u003cmarca\u003e e \u003cmodelo\u003e",
  "keyword": "Quando "
});
formatter.step({
  "name": "clicar na opção exibida no drop down menu",
  "keyword": "E "
});
formatter.step({
  "name": "o resultado da busca for exibido",
  "keyword": "E "
});
formatter.step({
  "name": "selecionar a opção Concessionária",
  "keyword": "E "
});
formatter.step({
  "name": "selecionar a opção Loja",
  "keyword": "E "
});
formatter.step({
  "name": "a listagem de estoque de uma determinada loja será exibida",
  "keyword": "Então "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Exemplos",
  "rows": [
    {
      "cells": [
        "marca",
        "modelo"
      ]
    },
    {
      "cells": [
        "\"Honda \"",
        "\"City\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Buscar veículo com sucesso",
  "description": "",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "name": "que esteja na tela inicial da Webmotors",
  "keyword": "Dado "
});
formatter.match({
  "location": "steps.SeachSteps.queEstouNoSite() in file:/C:/Users/HP/IdeaProjects/Webmotors_WEB/target/test-classes/"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class steps.SeachSteps\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:115)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:101)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:28)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:58)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:60)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:46)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:168)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:79)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:202)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:109)\r\n\t... 31 more\r\nCaused by: java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.chrome.driver system property; for more information, see https://github.com/SeleniumHQ/selenium/wiki/ChromeDriver. The latest version can be downloaded from http://chromedriver.storage.googleapis.com/index.html\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat steps.SeachSteps.\u003cinit\u003e(SeachSteps.java:25)\r\n\t... 37 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "eu inserir as informações \"Honda \" e \"City\"",
  "keyword": "Quando "
});
formatter.match({
  "location": "steps.SeachSteps.eu_inserir_as_informações_e(String,String) in file:/C:/Users/HP/IdeaProjects/Webmotors_WEB/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicar na opção exibida no drop down menu",
  "keyword": "E "
});
formatter.match({
  "location": "steps.SeachSteps.clicar_na_opção_exibida_no_drop_down_menu() in file:/C:/Users/HP/IdeaProjects/Webmotors_WEB/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o resultado da busca for exibido",
  "keyword": "E "
});
formatter.match({
  "location": "steps.SeachSteps.o_resultado_da_busca_for_exibido() in file:/C:/Users/HP/IdeaProjects/Webmotors_WEB/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecionar a opção Concessionária",
  "keyword": "E "
});
formatter.match({
  "location": "steps.SeachSteps.selecionar_a_opção_Concessionária() in file:/C:/Users/HP/IdeaProjects/Webmotors_WEB/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selecionar a opção Loja",
  "keyword": "E "
});
formatter.match({
  "location": "steps.SeachSteps.selecionar_a_opção_Loja() in file:/C:/Users/HP/IdeaProjects/Webmotors_WEB/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "a listagem de estoque de uma determinada loja será exibida",
  "keyword": "Então "
});
formatter.match({
  "location": "steps.SeachSteps.a_listagem_de_estoque_de_uma_determinada_loja_será_exibida() in file:/C:/Users/HP/IdeaProjects/Webmotors_WEB/target/test-classes/"
});
formatter.result({
  "status": "skipped"
});
});