let unknowVar: unknown; // Similar to any but it prevents executing methods or functions directly until the type is specified.
unknowVar = true;
unknowVar = false;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

// unknowVar.anywhere() // no

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase(); // yes, we can do this only when the type is verified before.
}
