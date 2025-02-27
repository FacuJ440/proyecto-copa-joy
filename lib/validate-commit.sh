#!/bin/sh
# Script para validar el mensaje del commit

commit_message=$(cat "$1")

if ! echo "$commit_message" | grep -q '^[A-Z]'; then
  echo "Error: El mensaje del commit debe comenzar con una letra mayúscula."
  exit 1
fi

if echo "$commit_message" | grep -q '\.\.\.$'; then
  echo "Error: El mensaje del commit no debe terminar con puntos suspensivos."
  exit 1
fi

if echo "$commit_message" | grep -q '\.$'; then
  echo "Error: El mensaje del commit no debe terminar con un punto final."
  exit 1
fi

echo "Mensaje de commit valido."
exit 0