<%-- 
    Document   : index
    Created on : 17 de out de 2022, 13:52:34
    Author     : Fatec
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%> 

<!DOCTYPE html>

<!--O JSP é uma página com codigicação html e codificação java, que possui a extensão .jsp
    Serve para trazer dinamismo a páginas HTML estáticas.-->
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>
            <% //Esta é a tag de abertura do código java, neste caso denominada scriplets
                out.println("Ola Mundo, vamos mostrar uma soma: \n");
                int a=10;
                int b=10;
                int c=a+b;
                out.println(a+"+"+b+"="+c);
            %> <!--Fechamento-->
            <%@ include file="segredo.jspf" %>     
            <!--Diferentemente dos Servlets, a página JSP não precisa
            ser compilada, esta tarefa é realizada em tempo real 
            pelo servidor.-->
             <!--O JSPF representa fragmentos do arquivo JSP base, esses arquivos JSPF não foram feitos
             para compilares em sí mesmos, mas sim para serem chamados pela página-->
             <!--O JSTL representa um conjunto de tags utilizadas para simplificar o desenvolvimento
            com JSP-->
        </h1>
    </body>
</html>
